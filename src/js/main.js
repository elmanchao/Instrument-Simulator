window.onload = function() {
    window.addEventListener('keydown', playSound);
    window.addEventListener('keyup', stopSound);
    const keys = document.querySelectorAll(`.key`);
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return;
        if (audio.paused) {
            audio.play();
            key.classList.add('playing');
        }
    }

    function stopSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        this.classList.remove(`playing`);
    }
};
