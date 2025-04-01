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

// 在原有代码基础上添加以下内容

// 移动端触摸事件支持
progress.addEventListener('touchstart', handleProgressTouch);
progress.addEventListener('touchmove', handleProgressTouch);

volume.addEventListener('touchstart', handleVolumeTouch);
volume.addEventListener('touchmove', handleVolumeTouch);

function handleProgressTouch(e) {
    const rect = progress.getBoundingClientRect();
    const percent = (e.touches[0].clientX - rect.left) / rect.width;
    progress.value = percent * 100;
    audio.currentTime = percent * audio.duration;
}

function handleVolumeTouch(e) {
    const rect = volume.getBoundingClientRect();
    const value = (e.touches[0].clientX - rect.left) / rect.width;
    volume.value = Math.min(Math.max(value, 0), 1);
    audio.volume = volume.value;
}

// 自动缩放处理
function adjustPlayerSize() {
    const player = document.querySelector('.player-container');
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 400) {
        player.style.transform = 'translateX(-50%) scale(0.9)';
    } else {
        player.style.transform = 'translateX(-50%)';
    }
}

window.addEventListener('resize', adjustPlayerSize);
adjustPlayerSize(); // 初始化