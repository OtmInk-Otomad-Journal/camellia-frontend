/* eslint-disable */
var CommentData = (function () {
  function CommentData(comment) {
    this._dbid = 0
    this.blocked = false
    this.blockType = 0
    this.border = false
    this.credit = false
    this.date = ''
    this.deleted = false
    this.id = 0
    this.mode = 0
    this.msg = ''
    this.live = true
    this.locked = true
    this.on = true
    this.pool = 0
    this.preview = false
    this.reported = false
    this.size = 25
    this.stime = 0
    this.text = ''
    this.type = ''
    this.uid = ''
    this._dbid = comment['dbid']
    this.size = comment['size']
    this.text = comment['text']
    this.mode = comment['mode']
    this.stime = comment['stime']
    this.date = comment['date']
  }
  Object.defineProperty(CommentData.prototype, 'danmuId', {
    get: function () {
      return this._dbid
    },
    enumerable: true,
    configurable: true
  })
  return CommentData
})()
var Player
;(function (Player) {
  var Sound = (function () {
    function Sound(type, onload) {
      this._isPlaying = false
      this._id = Runtime.generateId('obj-snd')
      this.onload = onload
      this._source = type
    }
    Sound.prototype.createFromURL = function (url) {
      this._source = url
    }
    Sound.prototype.play = function () {
      if (this._isPlaying) {
        return
      }
    }
    Sound.prototype.remove = function () {}
    Sound.prototype.stop = function () {
      if (!this._isPlaying) {
        return
      }
    }
    Sound.prototype.loadPercent = function () {
      return 0
    }
    Sound.prototype.getId = function () {
      return this._id
    }
    Sound.prototype.dispatchEvent = function (_eventName, _params) {}
    Sound.prototype.unload = function () {
      this.stop()
    }
    Sound.prototype.serialize = function () {
      return {
        class: 'Sound',
        url: this._source
      }
    }
    return Sound
  })()
  function createSound(sample, onload) {
    if (onload === void 0) {
      onload = null
    }
    return new Sound(sample, onload)
  }
  Player.createSound = createSound
})(Player || (Player = {}))
var Player
;(function (Player) {
  var _state = ''
  var _time
  var _commentList
  var _refreshRate
  var _width
  var _height
  var _videoWidth
  var _videoHeight
  var _lastUpdate = new Runtime.TimeKeeper()
  Object.defineProperty(Player, 'state', {
    get: function () {
      return _state
    },
    set: function (_value) {
      __trace('Player.state is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'time', {
    get: function () {
      if (_state !== 'playing') {
        return _time
      } else {
        return _time + _lastUpdate.elapsed
      }
    },
    set: function (_value) {
      __trace('Player.time is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'commentList', {
    get: function () {
      return _commentList
    },
    set: function (_value) {
      __trace('Player.commentData is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'refreshRate', {
    get: function () {
      return _refreshRate
    },
    set: function (_value) {
      __trace('Player.refreshRate deprecated. Please use Display.frameRate', 'warn')
    }
  })
  Object.defineProperty(Player, 'width', {
    get: function () {
      return _width
    },
    set: function (_value) {
      __trace('Player.width is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'height', {
    get: function () {
      return _height
    },
    set: function (_value) {
      __trace('Player.height is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'videoWidth', {
    get: function () {
      return _videoWidth
    },
    set: function (_value) {
      __trace('Player.videoWidth is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'videoHeight', {
    get: function () {
      return _videoHeight
    },
    set: function (_value) {
      __trace('Player.videoHeight is read-only', 'warn')
    }
  })
  Object.defineProperty(Player, 'version', {
    get: function () {
      return 'CCLPlayer/1.0 HTML5/* (bilibili, like BSE, like flash)'
    },
    set: function (_value) {
      __trace('Player.version is read-only', 'warn')
    }
  })
  function play() {
    __pchannel('Player::action', {
      action: 'play'
    })
  }
  Player.play = play
  function pause() {
    __pchannel('Player::action', {
      action: 'pause'
    })
  }
  Player.pause = pause
  function seek(offset) {
    __pchannel('Player::action', {
      action: 'seek',
      params: offset
    })
  }
  Player.seek = seek
  function jump(video, page, newWindow) {
    if (page === void 0) {
      page = 1
    }
    if (newWindow === void 0) {
      newWindow = false
    }
    __pchannel('Player::action', {
      action: 'jump',
      params: {
        vid: video,
        page: page,
        window: newWindow
      }
    })
  }
  Player.jump = jump
  function commentTrigger(callback, timeout) {
    if (!Runtime.hasObject('__player')) {
      __trace('Your environment does not support player triggers.', 'err')
      return
    }
    if (timeout < 0) {
      return
    }
    var listener = function (comment) {
      callback(comment)
    }
    var player = Runtime.getObject('__player')
    player.addEventListener('comment', listener)
  }
  Player.commentTrigger = commentTrigger
  function keyTrigger(callback, timeout, triggerOnUp) {
    if (timeout === void 0) {
      timeout = 1000
    }
    if (triggerOnUp === void 0) {
      triggerOnUp = false
    }
    if (!Runtime.hasObject('__player')) {
      __trace('Your environment does not support key triggers.', 'err')
      return
    }
    if (timeout < 0) {
      return
    }
    var eventName = 'key' + (triggerOnUp ? 'up' : 'down')
    var listener = function (key) {
      callback(key.keyCode)
    }
    var player = Runtime.getObject('__player')
    player.addEventListener(eventName, listener)
  }
  Player.keyTrigger = keyTrigger
  function setMask(_mask) {
    __trace('Masking not supported yet', 'warn')
  }
  Player.setMask = setMask
  function toString() {
    return '[player Player]'
  }
  Player.toString = toString
  __schannel('Update:DimensionUpdate', function (payload) {
    _width = payload['stageWidth']
    _height = payload['stageHeight']
    if (payload.hasOwnProperty('videoWidth') && payload.hasOwnProperty('videoHeight')) {
      _videoWidth = payload['videoWidth']
      _videoHeight = payload['videoHeight']
    }
  })
  __schannel('Update:TimeUpdate', function (payload) {
    _state = payload['state']
    _time = payload['time']
    _lastUpdate.reset()
  })
})(Player || (Player = {}))
