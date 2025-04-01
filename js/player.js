// 文件位置：js/player.js 
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playerContainer = document.querySelector('.player-container');
const cover = document.getElementById('cover');

// 控制旋转动画
audio.addEventListener('play', () => {
    playerContainer.style.animationPlayState = 'running';
    playPauseBtn.textContent = 'Pause'; // 暂停符号
});

audio.addEventListener('pause', () => {
    playerContainer.style.animationPlayState = 'paused';
    playPauseBtn.textContent = 'Play'; // 播放符号
});

// 点击封面切换音乐
cover.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause();
});

// 初始化点击事件
document.addEventListener('click', function initAudio() {
    audio.play();
    document.removeEventListener('click', initAudio);
}, { once: true });

// 更换封面示例代码（需自行实现文件上传逻辑）
function changeCover(newCoverUrl) {
    cover.src = newCoverUrl;
}