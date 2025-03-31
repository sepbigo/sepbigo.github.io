// 配置音乐文件
const musicFiles = [
    { title: '示情 - 范文芳', url: '/music/范文芳 - 示情.mp3' },
    { title: '示情 - 范文芳', url: '/music/范文芳 - 示情.mp3' }
];

let currentTrack = 0;
let audio = new Audio();
let isPlaying = true;

// 初始化播放器
function initPlayer() {
    audio.volume = document.getElementById('volume').value;
    
    audio.ontimeupdate = function() {
        const progress = (audio.currentTime / audio.duration) * 100 || 0;
        document.getElementById('progress-bar').style.width = progress + '%';
    };

    document.getElementById('progress-container').onclick = function(e) {
        const rect = this.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pos * audio.duration;
    };

    document.getElementById('progress-container').addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    audio.currentTime = audio.duration * percentage;
});

// 添加键盘控制
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
            togglePlay();
            break;
        case 'ArrowRight':
            skip(10);
            break;
        case 'ArrowLeft':
            skip(-10);
            break;
    }
});

// 添加触摸设备支持
let lastTap = 0;
document.getElementById('playerContainer').addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTap < 300) { // 双击显示
        document.getElementById('playerContainer').classList.remove('player-hidden');
    }
    lastTap = currentTime;
});

    audio.onended = nextTrack;
}

// 播放控制方法
function playTrack(index) {
    currentTrack = index;
    audio.src = musicFiles[index].url;
    audio.play();
    isPlaying = true;
    document.getElementById('playBtn').textContent = '〓';
    document.getElementById('now-playing').textContent = `♪ ${musicFiles[index].title}`;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('playBtn').textContent = '⏵';
    } else {
        audio.play();
        document.getElementById('playBtn').textContent = '〓';
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % musicFiles.length;
    playTrack(currentTrack);
}

function previousTrack() {
    currentTrack = (currentTrack - 1 + musicFiles.length) % musicFiles.length;
    playTrack(currentTrack);
}

function setVolume(value) {
    audio.volume = value;
}

// 在音频控制函数区域
function toggleMute() {
    audio.muted = !audio.muted;
    document.getElementById('muteIcon').textContent = 
        audio.muted ? '🔇' : '🔊';
}

// 初始化时同步状态
function initPlayer() {
    // 已有初始化代码...
    document.getElementById('muteIcon').textContent = 
        audio.muted ? '🔇' : '🔊';
}

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', initPlayer);
