function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  if(audio.paused) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
}

function stopSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;
  //audio.currentTime = 0;
  audio.pause();
}
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', stopSound);

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  this.classList.remove(`playing`);
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
