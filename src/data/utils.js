import { gsap } from 'gsap'
const tl = gsap.timeline()
function seek_frame(frame, fps, start_time) {
  tl.seek(frame / fps)
  return frame / fps
  // videoRef.value.currentTime = start_time + frame / fps
}
async function switch_frame(frame) {
  tl.restart()
}

export { seek_frame, switch_frame }
