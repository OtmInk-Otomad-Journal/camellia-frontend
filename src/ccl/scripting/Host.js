/* eslint-disable */
var CCLScripting = function (workerUrl) {
  this.version = 1.0
  this.workerUrl = workerUrl
  this.logger = new (function () {
    this.log = function (m) {
      console.log(m)
    }
    this.error = function (m) {
      console.error(m)
    }
    this.warn = function (m) {
      console.warn(m)
    }
  })()
  this.getWorker = function () {
    return new Worker(this.workerUrl)
  }
  this.getScriptingContext = function (stage) {
    return new this.ScriptingContext(this, stage)
  }
  this.getSandbox = function (stage, player) {
    return new this.BridgedSandbox(this, stage, player)
  }
}

;(function () {
  if (!CCLScripting) {
    throw new Error('CCL: Scripting engine not defined.')
  }

  CCLScripting.prototype.ScriptingContext = function (scripter, stage) {
    // Here in the Scripting Context we also have a objects
    var objects = {}
    this.registerObject = function (objectId, serialized) {
      if (typeof this.Unpack[serialized['class']] === 'function') {
        objects[objectId] = new this.Unpack[serialized['class']](stage, serialized, this)
      } else {
        scripter.logger.error(
          'Cannot unpack class "' + serialized['class'] + '". No valid unpacker found'
        )
        return
      }
    }

    this.deregisterObject = function (objectId) {
      delete objects[objectId]
    }
    this.updateProperty = function (objectId, propName, value) {
      if (!objects[objectId]) {
        scripter.logger.error('Object (' + objectId + ') not found.')
        return
      }
      if (objects[objectId][propName] === undefined) {
        scripter.logger.error(
          'Property "' +
            propName +
            '" not defined for object of type ' +
            objects[objectId].getClass() +
            '.'
        )
        return
      }
      objects[objectId][propName] = value
    }
    this.callMethod = function (objectId, methodName, params) {
      if (!objects[objectId]) {
        scripter.logger.error('Object (' + objectId + ') not found.')
        return
      }
      if (!objects[objectId][methodName]) {
        scripter.logger.error(
          'Method "' +
            methodName +
            '" not defined for object of type ' +
            objects[objectId].getClass() +
            '.'
        )
        return
      }
      try {
        objects[objectId][methodName](params)
      } catch (e) {
        if (e.stack) {
          scripter.logger.error(e.stack)
        } else {
          scripter.logger.error(e.toString())
        }
      }
    }
    this.getObject = function (objectId) {
      if (!objects.hasOwnProperty(objectId)) {
        scripter.logger.error('Object (' + objectId + ') not found.')
        return objects[objectId]
      }
      return objects[objectId]
    }
    this.invokeError = function (msg, mode) {
      switch (mode) {
        case 'err':
          scripter.logger.error(msg)
          break
        case 'warn':
          scripter.logger.warn(msg)
          break
        default:
        case 'log':
          scripter.logger.log(msg)
          break
      }
    }
    this.clear = function () {}

    this.getDimensions = function () {
      return {
        stageWidth: stage.offsetWidth,
        stageHeight: stage.offsetHeight,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
      }
    }
  }

  CCLScripting.prototype.ScriptingContext.prototype.Unpack = {}

  CCLScripting.prototype.BridgedSandbox = function (scripter, stage, player) {
    var worker = scripter.getWorker()
    var context = scripter.getScriptingContext(stage)
    var playerAbst = player
    var channels = {}
    var isRunning = false
    var sandbox = this

    if (!worker) {
      throw new Error('SANDBOX: Worker pool exhausted.')
    }

    this.getLogger = function () {
      return scripter.logger
    }

    this.getPlayer = function () {
      return playerAbst
    }

    this.getContext = function () {
      return context
    }

    this.addListener = function (channel, listener) {
      if (!channels[channel]) {
        channels[channel] = {
          max: 0,
          listeners: []
        }
      }
      if (channels[channel].max > 0) {
        if (channels[channel].listeners.length >= channels[channel].max) {
          return false
        }
      }
      channels[channel].listeners.push(listener)
      return true
    }

    var dispatchMessage = function (msg) {
      if (channels[msg.channel] && channels[msg.channel].listeners) {
        for (var i = 0; i < channels[msg.channel].listeners.length; i++) {
          channels[msg.channel].listeners[i](msg.payload)
        }
      } else {
        scripter.logger.warn('Message for channel "' + msg.channel + '" but channel not existant.')
      }
    }

    var WorkerHook = function (event) {
      try {
        var resp = JSON.parse(event.data)
      } catch (e) {
        if (e.stack) {
          scripter.logger.error(e.stack)
        } else {
          scripter.logger.error(e)
        }
        return
      }
      if (resp.channel === '') {
        switch (resp.mode) {
          case 'log':
          default: {
            scripter.logger.log(resp.obj)
            break
          }
          case 'warn': {
            scripter.logger.warn(resp.obj)
            break
          }
          case 'err': {
            scripter.logger.error(resp.obj)
            break
          }
          case 'fatal': {
            scripter.logger.error(resp.obj)
            sandbox.resetWorker()
            return
          }
        }
        return
      }
      if (resp.channel.substring(0, 8) === '::worker') {
        var RN = resp.channel.substring(8)
        switch (RN) {
          case ':state': {
            if (resp.payload === 'running' && resp.auth === 'worker') {
              isRunning = true
              channels = {}
              sandbox.init()
            }
            break
          }
          case ':debug': {
            scripter.logger.log(JSON.stringify(resp.payload))
            break
          }
          default: {
            scripter.logger.log(JSON.stringify(resp))
            break
          }
        }
      } else {
        dispatchMessage(resp)
      }
    }

    this.resetWorker = function () {
      try {
        worker.terminate()
      } catch (e) {}
      worker = scripter.getWorker()
      if (!worker) {
        throw new Error('SANDBOX: Worker pool exhausted.')
      }
      worker.addEventListener('message', WorkerHook)
    }

    worker.addEventListener('message', WorkerHook)

    this.eval = function (code) {
      // Pushes the code to be evaluated on the Worker
      if (!isRunning) {
        throw new Error('Worker offline')
      }
      worker.postMessage(
        JSON.stringify({
          channel: '::eval',
          payload: code
        })
      )
    }

    this.send = function (channel, payload) {
      // Low level send
      worker.postMessage(
        JSON.stringify({
          channel: channel,
          payload: payload
        })
      )
    }
  }
  CCLScripting.prototype.BridgedSandbox.prototype.init = function () {
    var self = this
    /** Post whatever we need to **/
    self.send('Update:DimensionUpdate', self.getContext().getDimensions())
    /** Hook Listeners **/
    this.addListener('Runtime::alert', function (msg) {
      alert(msg)
    })
    this.addListener('Runtime::clear', function () {
      self.getContext().clear()
    })
    this.addListener('Player::action', function (msg) {
      try {
        if (self.getPlayer() == null) {
          self.getLogger().warn('Player not initialized!')
          return
        }
        switch (msg.action) {
          default:
            return
          case 'play':
            self.getPlayer().play()
            break
          case 'pause':
            self.getPlayer().pause()
            break
          case 'seek':
            self.getPlayer().seek(msg.params)
            break
          case 'jump':
            self.getPlayer().jump(msg.params)
            break
        }
      } catch (e) {
        if (e.stack) {
          self.getLogger().error(e.stack)
        } else {
          self.getLogger().error(e.toString())
        }
      }
    })
    this.addListener('Runtime:RegisterObject', function (pl) {
      self.getContext().registerObject(pl.id, pl.data)
    })
    this.addListener('Runtime:DeregisterObject', function (pl) {
      self.getContext().deregisterObject(pl.id)
    })
    this.addListener('Runtime:CallMethod', function (pl) {
      self.getContext().callMethod(pl.id, pl.method, pl.params)
    })
    this.addListener('Runtime:UpdateProperty', function (pl) {
      self.getContext().updateProperty(pl.id, pl.name, pl.value)
    })
    self.getContext().registerObject('__root', { class: 'SpriteRoot' })
  }
})()

/** Define some Unpackers **/
;(function () {
  /** This is the DOM Manipulation Library **/
  var _ = function (type, props, children, callback) {
    var elem = null
    if (type === 'text') {
      return document.createTextNode(props)
    } else if (type === 'svg') {
      elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    } else {
      elem = document.createElement(type)
    }
    for (var n in props) {
      if (n !== 'style' && n !== 'className') {
        elem.setAttribute(n, props[n])
      } else if (n === 'className') {
        elem.className = props[n]
      } else {
        for (var x in props.style) {
          elem.style[x] = props.style[x]
        }
      }
    }
    if (children) {
      for (var i = 0; i < children.length; i++) {
        if (children[i] != null) elem.appendChild(children[i])
      }
    }
    if (callback && typeof callback === 'function') {
      callback(elem)
    }
    return elem
  }
  var ScriptingContext = CCLScripting.prototype.ScriptingContext
  ScriptingContext.prototype.Unpack.TextField = function (stage, data, ctx) {
    this.DOM = _('div', {
      style: {
        position: 'absolute',
        opacity: data.alpha != null ? data.alpha : 1,
        transformOrigin: '0 0 0'
      },
      className: 'cmt'
    })
    /** Load the text **/
    this.DOM.appendChild(document.createTextNode(data.text))
    var getColor = function (c) {
      if (typeof c === 'string') {
        c = parseInt(c)
        if (c === NaN) {
          c = 0
        }
      }
      var color = c.toString(16)
      while (color.length < 6) {
        color = '0' + color
      }
      return '#' + color
    }
    this.setTextFormat = function (textFormat) {
      this.DOM.style.fontFamily = textFormat.font
      this.DOM.style.fontSize = textFormat.size + 'px'
      this.DOM.style.color = getColor(textFormat.color)
      if (textFormat.color <= 16) {
        this.DOM.style.textShadow = '0 0 1px #fff'
      }
      if (textFormat.bold) this.DOM.style.fontWeight = 'bold'
      if (textFormat.underline) this.DOM.style.textDecoration = 'underline'
      if (textFormat.italic) this.DOM.style.fontStyle = 'italic'
      this.DOM.style.margin = textFormat.margin
    }
    /** Load the text format **/
    this.setTextFormat(data.textFormat)

    this.setX = function (x) {
      data.x = x
      this.DOM.style.left = data.x + 'px'
    }

    this.setY = function (y) {
      data.y = y
      this.DOM.style.top = data.y + 'px'
    }
    this.setAlpha = function (a) {
      data.alpha = a
      this.DOM.style.opacity = a
    }
    /** Load x,y **/
    this.setX(data.x)
    this.setY(data.y)

    /** Other **/
    this.setText = function (text) {
      this.DOM.innerHTML = ''
      this.DOM.appendChild(_('text', text))
    }
    this.__defineSetter__('visible', function (f) {
      this.DOM.style.visibility = f ? 'visible' : 'hidden'
    })
    this.__defineGetter__('visible', function (f) {
      return this.DOM.style.visibility === 'hidden' ? false : true
    })
    this.__defineSetter__('alpha', function (f) {
      this.setAlpha(f)
    })
    this.__defineGetter__('alpha', function (f) {
      return data.alpha
    })
    this.__defineSetter__('x', function (f) {
      this.setX(f)
    })
    this.__defineSetter__('y', function (f) {
      this.setY(f)
    })
    this.__defineGetter__('x', function (f) {
      return data.x
    })
    this.__defineGetter__('y', function (f) {
      return data.y
    })
    this.__defineGetter__('text', function (f) {
      return this.DOM.textContent
    })
    this.__defineSetter__('text', function (f) {
      this.setText(f)
    })
    this.__defineGetter__('filters', function (f) {
      return []
    })
    this.__defineSetter__('filters', function (f) {
      this.setFilters([f])
    })

    this.__defineGetter__('transform', function (f) {
      return {}
    })
    this.__defineGetter__('transform', function (f) {
      return {}
    })
    this.__defineSetter__('transform', function (f) {
      if (f.mode === '2d') {
        var rm = [f.matrix[0], f.matrix[3], f.matrix[1], f.matrix[4], f.matrix[2], f.matrix[5]]
        var _transform = 'matrix(' + rm.join(',') + ')'
      } else {
        var _transform = 'matrix3d(' + f.matrix.join(',') + ')'
      }
      this.DOM.style.transform = _transform
    })
    this.setFilters = function (params) {
      var shadows = []
      for (var i = 0; i < params[0].length; i++) {
        var filter = params[0][i]
        if (filter.type === 'blur') {
          //this.DOM.style.color = "transparent";
          shadows.push([0, 0, Math.max(filter.params.blurX, filter.params.blurY) + 'px'].join(' '))
        } else if (filter.type === 'glow') {
          for (var i = 0; i < Math.min(2, filter.params.strength); i++) {
            shadows.push(
              [
                0,
                0,
                Math.max(filter.params.blurX, filter.params.blurY) + 'px',
                getColor(filter.params.color)
              ].join(' ')
            )
          }
        }
      }
      this.DOM.style.textShadow = shadows.join(',')
    }

    /** Common **/
    this.unload = function () {
      try {
        stage.removeChild(this.DOM)
      } catch (e) {}
    }
    // Hook child
    stage.appendChild(this.DOM)
  }

  ScriptingContext.prototype.Unpack.Shape = function (stage, data, ctx) {
    this.DOM = _('svg', {
      width: stage.offsetWidth * 2,
      height: stage.offsetHeight * 2,
      style: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: stage.offsetWidth * 2 + 'px',
        height: stage.offsetWidth * 2 + 'px',
        transform: 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'
      }
    })
    this._x = data.x ? data.x : 0
    this._y = data.y ? data.y : 0
    this._alpha = data.alpha ? data.alpha : 1
    this._transform = ''

    // Helpers
    var __ = function (e, attr) {
      if (typeof e === 'string') {
        var elem = document.createElementNS('http://www.w3.org/2000/svg', e)
      } else {
        var elem = e
      }
      if (attr) {
        for (var x in attr) {
          elem.setAttribute(x, attr[x])
        }
      }
      return elem
    }

    var globalDefs = __('defs')
    var defaultEffects = __('defs')
    var defaultGroup = __('g', {})
    var defaultContainer = __('g', {
      transform: 'translate(' + this._x + ',' + this._y + ')',
      opacity: this._alpha
    })

    defaultContainer.appendChild(defaultGroup)
    var defaultGroupWithEffects = defaultContainer
    this.DOM.appendChild(globalDefs)
    this.DOM.appendChild(defaultEffects)
    this.DOM.appendChild(defaultGroupWithEffects)
    /** PROPS **/
    this.__defineSetter__('visible', function (f) {
      this.DOM.style.visibility = f ? 'visible' : 'hidden'
    })
    this.__defineGetter__('visible', function (f) {
      return this.DOM.style.visibility === 'hidden' ? false : true
    })
    this.__defineSetter__('x', function (f) {
      this.setX(f)
    })
    this.__defineSetter__('y', function (f) {
      this.setY(f)
    })
    this.__defineSetter__('alpha', function (f) {
      this.setAlpha(f)
    })
    this.__defineSetter__('blendMode', function (f) {
      this.DOM.style.backgroundBlendMode = f
      this.DOM.style.mixBlendMode = f
    })
    this.__defineGetter__('blendMode', function (f) {
      return ''
    })
    this.__defineGetter__('x', function (f) {
      return this._x
    })
    this.__defineGetter__('y', function (f) {
      return this._y
    })
    this.__defineGetter__('alpha', function (f) {
      return this._alpha
    })
    this.__defineGetter__('transform', function (f) {
      return {}
    })
    this.__defineSetter__('transform', function (f) {
      if (f.mode === '2d') {
        var rm = [f.matrix[0], f.matrix[3], f.matrix[1], f.matrix[4], f.matrix[2], f.matrix[5]]
        this._transform = 'matrix(' + rm.join(',') + ')'
      } else {
        this._transform = 'matrix3d(' + f.matrix.join(',') + ')'
      }
      if (f.mode === '2d') {
        this.DOM.style.transform = 'matrix(1,0,0,1,0,0)'
        __(defaultGroup, {
          transform: this._transform
        })
      } else {
        // We must resort to HTML
        this.DOM.style.transformOrigin = this._x + offsetX + 'px ' + (this._y + offsetY) + 'px 0'
        this.DOM.style.transform = this._transform
      }
    })
    /** /PROPS **/

    this.line = {
      width: 0,
      color: '#ffffff',
      alpha: 1
    }
    this.fill = {
      fill: 'none',
      alpha: 1,
      fillRule: 'nonzero'
    }
    var toRGB = function (number) {
      var string = parseInt(number).toString(16)
      while (string.length < 6) {
        string = '0' + string
      }
      return '#' + string
    }
    var applyStroke = function (p, ref) {
      __(p, {
        stroke: ref.line.color,
        'stroke-width': ref.line.width,
        'stroke-opacity': ref.line.alpha
      })
      if (ref.line.caps) {
        p.setAttribute('stroke-linecap', ref.line.caps)
      }
      if (ref.line.joints) {
        p.setAttribute('stroke-linejoin', ref.line.joints)
      }
      if (ref.line.miterLimit) {
        p.setAttribute('stroke-miterlimit', ref.line.miterLimit)
      }
    }

    var applyFill = function (p, ref) {
      __(p, {
        fill: ref.fill.fill,
        'fill-opacity': ref.fill.alpha,
        'fill-rule': ref.fill.fillRule
      })
    }

    var state = {
      lastPath: null,
      scheduleClear: []
    }
    /** Offsets for canvas **/
    var offsetX = 0,
      offsetY = 0

    this.offset = function (x, y) {
      offsetX = x
      offsetY = y
      __(defaultContainer, {
        transform: 'translate(' + (this._x + offsetX) + ',' + (this._y + offsetY) + ')'
      })
    }
    /** Public methods **/
    this.setX = function (x) {
      if (!x) return
      this._x = x
      __(defaultContainer, {
        transform: 'translate(' + (this._x + offsetX) + ',' + (this._y + offsetY) + ')'
      })
    }
    this.setY = function (y) {
      if (!y) return
      this._y = y
      __(defaultContainer, {
        transform: 'translate(' + (this._x + offsetX) + ',' + (this._y + offsetY) + ')'
      })
    }
    this.setAlpha = function (alpha) {
      if (!alpha) return
      this._alpha = alpha
      __(defaultContainer, {
        opacity: this._alpha
      })
    }
    this.moveTo = function (params) {
      var p = __('path', {
        d: 'M' + params.join(' ')
      })
      applyFill(p, this)
      state.lastPath = p
      applyStroke(p, this)
      defaultGroup.appendChild(state.lastPath)
    }
    this.lineTo = function (params) {
      if (!state.lastPath) {
        state.lastPath = __('path', {
          d: 'M0 0'
        })
        applyFill(state.lastPath, this)
        applyStroke(state.lastPath, this)
        defaultGroup.appendChild(state.lastPath)
      }
      __(state.lastPath, {
        d: state.lastPath.getAttribute('d') + ' L' + params.join(' ')
      })
    }
    this.curveTo = function (params) {
      if (!state.lastPath) {
        state.lastPath = __('path', {
          d: 'M0 0'
        })
        applyFill(state.lastPath, this)
        applyStroke(state.lastPath, this)
        defaultGroup.appendChild(state.lastPath)
      }
      __(state.lastPath, {
        d: state.lastPath.getAttribute('d') + ' Q' + params.join(' ')
      })
    }
    this.lineStyle = function (params) {
      if (params.length < 3) return
      this.line.width = params[0]
      this.line.color = toRGB(params[1])
      this.line.alpha = params[2]
      if (params[3]) {
        this.line.caps = params[3]
      }
      if (params[4]) {
        this.line.joints = params[4]
      }
      if (params[5]) {
        this.line.miterLimit = params[5]
      }
      if (state.lastPath) {
        applyStroke(state.lastPath, this)
      }
    }
    this.drawPath = function (params) {
      var commands = params[0]
      var data = params[1]
      this.fill.fillRule = params[2] === 'nonZero' ? 'nonzero' : 'evenodd'
      var d = 'M0 0'
      for (var i = 0; i < commands.length; i++) {
        switch (commands[i]) {
          default:
          case 0: {
            /* NoOp x0 */
            continue
          }
          case 1:
            {
              /* MoveTo x2 */
              d += ' M' + data.splice(0, 2).join(' ')
            }
            break
          case 2:
            {
              /* LineTo x2 */
              d += ' L' + data.splice(0, 2).join(' ')
            }
            break
          case 3:
            {
              /* CurveTo x4 */
              d += ' Q' + data.splice(0, 4).join(' ')
            }
            break
          case 4:
            {
              /* wide MoveTo x4 */
              data.splice(0, 2)
              d += ' M' + data.splice(0, 2).join(' ')
            }
            break
          case 5:
            {
              /* wide LineTo x4 */
              data.splice(0, 2)
              d += ' L' + data.splice(0, 2).join(' ')
            }
            break
          case 6:
            {
              /* CubicCurveTo x6 */
              d += ' C' + data.splice(0, 6).join(' ')
            }
            break
        }
      }
      var path = __('path', {
        d: d
      })
      applyFill(path, this)
      applyStroke(path, this)
      defaultGroup.appendChild(path)
      this._clear()
    }
    this.beginFill = function (params) {
      if (params.length === 0) return
      this.fill.fill = toRGB(params[0])
      if (params.length > 1) {
        this.fill.alpha = params[1]
      }
    }
    this.beginGradientFill = function (params) {
      if (params.length === 0) {
        return
      }
      var gradId = 'gradient-' + params[0] + '-' + globalDefs.childNodes.length
      var grad
      if (params[0] === 'linear') {
        grad = __('linearGradient', { id: gradId, spreadMethod: params[5] })
      } else {
        grad = __('radialGradient', { id: gradId, spreadMethod: params[5] })
      }
      // Figure out all the stops
      var colors = params[1]
      var alphas = params[2]
      var ratios = params[3]
      for (var i = 0; i < ratios.length; i++) {
        grad.appendChild(
          __('stop', {
            offset: ratios[i] / 255,
            'stop-color': toRGB(colors[i]),
            'stop-opacity': alphas[i]
          })
        )
      }
      globalDefs.appendChild(grad)
      this.fill.fill = 'url(#' + gradId + ')'
    }
    this.endFill = function (params) {
      this.fill.fill = 'none'
    }
    this.drawRect = function (params) {
      if (state.drawing) console.log(state.drawing)
      if (params[2] < 0) {
        params[0] += params[2]
        params[2] = -params[2]
      }
      if (params[3] < 0) {
        params[1] += params[3]
        params[3] = -params[3]
      }
      var r = __('rect', {
        x: params[0],
        y: params[1],
        width: params[2],
        height: params[3]
      })
      applyFill(r, this)
      applyStroke(r, this)
      defaultGroup.appendChild(r)
    }
    this.drawRoundRect = function (params) {
      var r = __('rect', {
        x: params[0],
        y: params[1],
        width: params[2],
        height: params[3],
        rx: params[4],
        ry: params[5]
      })
      applyFill(r, this)
      applyStroke(r, this)
      defaultGroup.appendChild(r)
    }
    this.drawCircle = function (params) {
      var c = __('circle', {
        cx: params[0],
        cy: params[1],
        r: params[2]
      })
      applyFill(c, this)
      applyStroke(c, this)
      defaultGroup.appendChild(c)
    }

    this.drawEllipse = function (params) {
      var e = __('ellipse', {
        cx: params[0],
        cy: params[1],
        rx: params[2],
        ry: params[3]
      })
      applyFill(e, this)
      applyStroke(e, this)
      defaultGroup.appendChild(e)
    }

    this.drawTriangles = function (params) {
      if (params[1].length % 3 !== 0) {
        throw new Error(
          'Illegal drawTriangles index argument. Indices array size must be a multiple of 3.'
        )
      }
      var commands = [],
        data = []
      for (var i = 0; i < params[1].length / 3; i++) {
        var a = params[1][3 * i],
          b = params[1][3 * i + 1],
          c = params[1][3 * i + 2]
        var ax = params[0][2 * a],
          ay = params[0][2 * a + 1]
        var bx = params[0][2 * b],
          by = params[0][2 * b + 1]
        var cx = params[0][2 * c],
          cy = params[0][2 * c + 1]
        commands.push(1, 2, 2, 2)
        data.push(ax, ay, bx, by, cx, cy, ax, ay)
      }
      this.drawPath([commands, data, 'evenOdd'])
    }

    this._clear = function () {
      if (state.scheduleClear.length < 1) return
      if (state.scheduleTimer > -1) {
        clearTimeout(state.scheduleTimer)
        state.scheduleTimer = -1
      }
      while (defaultGroup.lastChild && state.scheduleClear.length > 0) {
        defaultGroup.removeChild(state.scheduleClear.pop())
      }
      state.scheduleClear = []
    }

    this.clear = function () {
      var children = defaultGroup.children ? defaultGroup.children : defaultGroup.childNodes
      for (var i = 0; i < children.length; i++) {
        state.scheduleClear.push(children[i])
      }
      var self = this
      state.scheduleTimer = setTimeout(function () {
        self._clear()
        state.scheduleTimer = -1
      }, 60)
    }

    this.__defineGetter__('filters', function (f) {
      return []
    })
    this.__defineSetter__('filters', function (f) {
      this.setFilters([f])
    })
    this.setFilters = function (params) {
      var filters = params[0]
      this.DOM.removeChild(defaultEffects)
      defaultEffects = __('defs')
      for (var i = 0; i < filters.length; i++) {
        var filter = filters[i]
        var dFilter = __('filter', {
          id: 'fe' + filter.type + i,
          x: '-50%',
          y: '-50%',
          width: '200%',
          height: '200%'
        })
        switch (filter.type) {
          default:
            break
          case 'blur':
            {
              dFilter.appendChild(
                __('feGaussianBlur', {
                  in: 'SourceGraphic',
                  stdDeviation: filter.params.blurX + ' ' + filter.params.blurY
                })
              )
            }
            break
          case 'glow':
            {
              var cR = Math.floor(filter.params.color / 65536),
                cG = Math.floor((filter.params.color % 65536) / 256),
                cB = filter.params.color % 256
              var cMatrix = [
                0,
                0,
                0,
                cR / 256,
                0,
                0,
                0,
                0,
                cG / 256,
                0,
                0,
                0,
                0,
                cB / 256,
                0,
                0,
                0,
                0,
                1,
                0
              ]
              dFilter.appendChild(
                __('feColorMatrix', {
                  type: 'matrix',
                  values: cMatrix.join(' ')
                })
              )
              dFilter.appendChild(
                __('feGaussianBlur', {
                  stdDeviation: filter.params.blurX + ' ' + filter.params.blurY,
                  result: 'coloredBlur'
                })
              )
              var m = __('feMerge')
              m.appendChild(
                __('feMergeNode', {
                  in: 'coloredBlur'
                })
              )
              m.appendChild(
                __('feMergeNode', {
                  in: 'SourceGraphic'
                })
              )
              dFilter.appendChild(m)
            }
            break
        }
        defaultEffects.appendChild(dFilter)
      }
      // Add new filters
      this.DOM.appendChild(defaultEffects)
      // Apply filters
      this.DOM.removeChild(defaultGroupWithEffects)
      var tGroup = defaultContainer
      for (var i = 0; i < filters.length; i++) {
        var layeredG = __('g', {
          filter: 'url(#' + 'fe' + filters[i].type + i + ')'
        })
        layeredG.appendChild(tGroup)
        tGroup = layeredG
      }
      this.DOM.appendChild(tGroup)
      defaultGroupWithEffects = tGroup
    }

    this.unload = function () {
      try {
        stage.removeChild(this.DOM)
      } catch (e) {}
    }
    // Hook Child
    stage.appendChild(this.DOM)
  }

  ScriptingContext.prototype.Unpack.Sprite = function (stage, data, ctx) {
    this.DOM = _('div', {
      style: {
        position: 'absolute',
        top: data.y ? data.y + 'px' : '0px',
        left: data.x ? data.x + 'px' : '0px',
        width: '100%',
        height: '100%',
        overflow: 'visible',
        transformOrigin: '0 0 0'
      }
    })

    data.scaleX = 1
    data.scaleY = 1
    data.children = []
    this.__defineSetter__('visible', function (f) {
      this.DOM.style.visibility = f ? 'visible' : 'hidden'
    })
    this.__defineGetter__('visible', function (f) {
      return this.DOM.style.visibility === 'hidden' ? false : true
    })
    this.__defineSetter__('alpha', function (f) {
      this.DOM.style.opacity = f
    })
    this.__defineGetter__('alpha', function (f) {
      return this.DOM.style.opacity
    })

    this.__defineSetter__('x', function (f) {
      this.setX(f)
    })
    this.__defineSetter__('y', function (f) {
      this.setY(f)
    })
    this.__defineSetter__('blendMode', function (f) {
      this.DOM.style.backgroundBlendMode = f
      this.DOM.style.mixBlendMode = f
    })
    this.__defineGetter__('blendMode', function (f) {
      return ''
    })
    this.__defineGetter__('x', function (f) {
      return this.DOM.offsetLeft
    })
    this.__defineGetter__('y', function (f) {
      return this.DOM.offsetTop
    })
    this.__defineGetter__('transform', function (f) {
      return {}
    })
    this.__defineSetter__('transform', function (f) {
      if (f.mode === '2d') {
        var rm = [f.matrix[0], f.matrix[3], f.matrix[1], f.matrix[4], f.matrix[2], f.matrix[5]]
        var _transform = 'matrix(' + rm.join(',') + ')'
      } else {
        var _transform = 'matrix3d(' + f.matrix.join(',') + ')'
      }
      this.DOM.style.transform = _transform
    })
    this.setX = function (x) {
      this.DOM.style.left = x + 'px'
    }

    this.setY = function (y) {
      this.DOM.style.top = y + 'px'
    }

    this.setWidth = function (width) {
      this.DOM.style.width = width + 'px'
    }

    this.setHeight = function (height) {
      this.DOM.style.height = height + 'px'
    }

    this.addChild = function (childitem) {
      var child = ctx.getObject(childitem)
      data.children.push(child)
      if (!child) return
      if (child.DOM) {
        if (child.getClass() === 'Shape') {
          var tX = this.x + stage.offsetWidth / 2,
            tY = this.y + stage.offsetHeight / 2
          child.offset(tX, tY)
          child.DOM.style.left = -tX + 'px'
          child.DOM.style.top = -tY + 'px'
        }
        this.DOM.appendChild(child.DOM)
      } else {
        ctx.invokeError('Sprite.addChild failed. Attempted to add non object', 'err')
      }
    }

    this.removeChild = function (childitem) {
      var child = ctx.getObject(childitem)
      if (!child) return
      try {
        this.DOM.removeChild(child.DOM)
      } catch (e) {
        ctx.invokeError(e.stack, 'err')
      }
    }

    this.unload = function () {
      try {
        stage.removeChild(this.DOM)
      } catch (e) {}
    }
    // Hook child
    stage.appendChild(this.DOM)
  }

  ScriptingContext.prototype.Unpack.SpriteRoot = function (stage, data, ctx) {
    this.DOM = stage
    this.addChild = function (childitem) {
      var child = ctx.getObject(childitem)
      if (!child) return
      if (child.DOM) {
        if (child.getClass() === 'Shape') {
          var tX = stage.offsetWidth / 2,
            tY = stage.offsetHeight / 2
          child.offset(tX, tY)
          child.DOM.style.left = -tX + 'px'
          child.DOM.style.top = -tY + 'px'
        }
        this.DOM.appendChild(child.DOM)
      } else {
        ctx.invokeError('Sprite.addChild failed. Attempted to add non object', 'err')
      }
    }

    this.removeChild = function (childitem) {
      var child = ctx.getObject(childitem)
      if (!child) return
      try {
        this.DOM.removeChild(child.DOM)
      } catch (e) {
        ctx.invokeError(e.stack, 'err')
      }
    }
  }

  ScriptingContext.prototype.Unpack.Button = function (stage, data, ctx) {
    this.DOM = _(
      'div',
      {
        className: 'button',
        style: {
          position: 'absolute',
          top: data.y ? data.y + 'px' : '0px',
          left: data.x ? data.x + 'px' : '0px'
        }
      },
      [_('text', data.text)]
    )

    data.scaleX = 1
    data.scaleY = 1
    this.__defineSetter__('visible', function (f) {
      this.DOM.style.visibility = f ? 'visible' : 'hidden'
    })
    this.__defineGetter__('visible', function (f) {
      return this.DOM.style.visibility === 'hidden' ? false : true
    })
    this.__defineGetter__('transform', function (f) {
      return {}
    })
    this.__defineSetter__('transform', function (f) {
      //if(f.mode === "2d"){
      //	this.DOM.style.transform = "matrix(" + (f.matrix.slice(0,6).join(",")) + ")";
      //}else{
      //	this.DOM.style.transform = "matrix3d(" + (f.matrix.join(",")) + ")";
      //}
    })
    this.__defineSetter__('filters', function (f) {
      // Ignore now
    })
    this.__defineGetter__('filters', function (f) {
      return []
    })
    this.__defineSetter__('alpha', function (f) {
      data.alpha = Math.min(Math.max(f, 0), 1)
      this.DOM.style.opacity = data.alpha + ''
    })
    this.__defineGetter__('alpha', function (f) {
      return data.alpha !== undefined ? data.alpha : 1
    })
    this.__defineSetter__('scaleX', function (f) {
      if (f > 50) return
      data.scaleX = f
      for (var i = 0; i < this.DOM.children.length; i++) {
        this.DOM.children[i].style.transform = 'scale(' + data.scaleX + ',' + data.scaleY + ')'
      }
    })
    this.__defineSetter__('scaleY', function (f) {
      if (f > 50) return
      data.scaleY = f
      for (var i = 0; i < this.DOM.children.length; i++) {
        this.DOM.children[i].style.transform = 'scale(' + data.scaleX + ',' + data.scaleY + ')'
      }
    })
    this.__defineGetter__('scaleX', function (f) {
      return data.scaleX
    })
    this.__defineGetter__('scaleY', function (f) {
      return data.scaleY
    })

    this.__defineSetter__('x', function (f) {
      this.setX(f)
    })
    this.__defineSetter__('y', function (f) {
      this.setY(f)
    })
    this.__defineGetter__('x', function (f) {
      return this.DOM.offsetLeft
    })
    this.__defineGetter__('y', function (f) {
      return this.DOM.offsetTop
    })

    this.setX = function (x) {
      this.DOM.style.left = x + 'px'
    }

    this.setY = function (y) {
      this.DOM.style.top = y + 'px'
    }

    this.setWidth = function (width) {
      this.DOM.style.width = width + 'px'
    }

    this.setHeight = function (height) {
      this.DOM.style.height = height + 'px'
    }

    this.addChild = function (childitem) {
      var child = ctx.getObject(childitem)
      if (!child) {
        return
      }
      if (child.DOM) {
        if (child.getClass() === 'Shape') {
          child.DOM.style.left = -this.x + 'px'
          child.DOM.style.top = -this.y + 'px'
          child.setX(this.x)
          child.setY(this.y)
        }
        this.DOM.appendChild(child.DOM)
      } else {
        ctx.invokeError('Sprite.addChild failed. Attempted to add non object', 'err')
      }
    }

    this.removeChild = function (childitem) {
      var child = ctx.getObject(childitem)
      if (!child) return
      try {
        this.DOM.removeChild(child.DOM)
      } catch (e) {
        ctx.invokeError(e.stack, 'err')
      }
    }

    this.unload = function () {
      try {
        stage.removeChild(this.DOM)
      } catch (e) {}
    }
    // Hook child
    stage.appendChild(this.DOM)
  }

  ScriptingContext.prototype.Unpack.BitmapData = function (stage, data, ctx) {
    this._notifyList = []
    this._data = new ImageData(data.width, data.height)

    // Fill the image
    this._fill = function (color) {
      var r = (color >> 16) & 0xff,
        g = (color >> 8) & 0xff,
        b = color & 0xff,
        a = (color >> 24) & 0xff
      for (var y = 0; y < this._data.height; y++) {
        for (var x = 0; x < this._data.width; x++) {
          var i = 4 * (y * this._data.width + x)
          this._data.data[i] = r
          this._data.data[i + 1] = g
          this._data.data[i + 2] = b
          this._data.data[i + 3] = a
        }
      }
    }

    this._registerNotify = function (bitmap) {
      if (this._notifyList.indexOf(bitmap) < 0) {
        this._notifyList.push(bitmap)
        // Also notify immediately
        bitmap._draw(this._data)
      }
    }

    this._deregisterNotify = function (bitmap) {
      var index = this._notifyList.indexOf(bitmap)
      if (index >= 0) {
        this._notifyList.splice(index, 1)
      }
    }

    this.updateBox = function (update) {
      var box = update.box
      for (var y = box.y; y < box.y + box.height; y++) {
        for (var x = box.x; x < box.x + box.width; x++) {
          // Unpack ARGB
          var color = update.values[y * box.width + x]
          var r = (color >> 16) & 0xff,
            g = (color >> 8) & 0xff,
            b = color & 0xff,
            a = (color >> 24) & 0xff
          var i = 4 * (y * this._data.width + x)
          this._data.data[i] = r
          this._data.data[i + 1] = g
          this._data.data[i + 2] = b
          this._data.data[i + 3] = a
        }
      }

      // Update all relevant images
      this._notifyList.forEach(
        function (image) {
          image._draw(this._data)
        }.bind(this)
      )
    }

    this.unload = function () {
      this._data = null
      // Make sure this is null so future uses will error out
    }
    // No need to hook anywhere
  }

  ScriptingContext.prototype.Unpack.Bitmap = function (stage, data, ctx) {
    this._bitmapDataId = null
    this.DOM = _('canvas', {
      style: {
        position: 'absolute',
        top: data.y ? data.y + 'px' : '0px',
        left: data.x ? data.x + 'px' : '0px',
        transformOrigin: '0 0 0'
      }
    })
    this.__defineGetter__('transform', function (f) {
      return {}
    })
    this.__defineSetter__('transform', function (f) {
      if (f.mode === '2d') {
        var rm = [f.matrix[0], f.matrix[3], f.matrix[1], f.matrix[4], f.matrix[2], f.matrix[5]]
        var _transform = 'matrix(' + rm.join(',') + ')'
      } else {
        var _transform = 'matrix3d(' + f.matrix.join(',') + ')'
      }
      this.DOM.style.transform = _transform
    })
    this.__defineSetter__('visible', function (f) {
      this.DOM.style.visibility = f ? 'visible' : 'hidden'
    })
    this.__defineGetter__('visible', function (f) {
      return this.DOM.style.visibility === 'hidden' ? false : true
    })
    this.__defineSetter__('x', function (f) {
      data.x = f
      this.DOM.style.left = data.x + 'px'
    })
    this.__defineSetter__('y', function (f) {
      data.y = f
      this.DOM.style.top = data.y + 'px'
    })
    this.__defineGetter__('x', function (f) {
      return 0
    })
    this.__defineGetter__('y', function (f) {
      return 0
    })

    this._draw = function (imageData) {
      this.DOM.setAttribute('width', imageData.width)
      this.DOM.setAttribute('height', imageData.height)
      var ctx = this.DOM.getContext('2d')
      ctx.putImageData(imageData, 0, 0)
    }

    this.setBitmapData = function (id) {
      var bitmapData = ctx.getObject(id)
      if (this._bitmapDataId !== null) {
        ctx.getObject(this._bitmapDataId)._deregisterNotify(this)
      }
      bitmapData._registerNotify(this)
      this._bitmapDataId = id
    }

    this.unload = function () {
      try {
        stage.removeChild(this.DOM)
      } catch (e) {}
    }
    // Set bitmap data
    if ('bitmapData' in data) {
      this.setBitmapData(data['bitmapData'])
    }
    // Hook DOM
    stage.appendChild(this.DOM)
  }

  // Load all the getClass Prototypes
  for (var cl in ScriptingContext.prototype.Unpack) {
    ScriptingContext.prototype.Unpack[cl].prototype.getClass = (function () {
      var n = cl
      return function () {
        return n
      }
    })()
  }
})()
