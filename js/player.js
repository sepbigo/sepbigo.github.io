const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');
const time = document.getElementById('time');
const volume = document.getElementById('volume');

// Auto-play handling
document.addEventListener('click', function initAudio() {
    audio.play();
    document.removeEventListener('click', initAudio);
}, { once: true });

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
});

// Update button text
audio.addEventListener('play', () => playPauseBtn.textContent = 'Pause');
audio.addEventListener('pause', () => playPauseBtn.textContent = 'Play');

// Progress bar
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
    
    // Time formatting
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    
    time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

// Seek functionality
progress.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Volume control
volume.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});