const buttons = document.querySelectorAll('.btn');
const sounds = document.querySelectorAll('audio');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        stopSounds();
        sounds.forEach(sound => {
            if (sound.id === btn.id) {
                sound.play();
            }
        });
    });
});

function stopSounds() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}


