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

// 文件位置：js/player.js 

// 修改初始化代码 (约第12行)
document.addEventListener('DOMContentLoaded', function() {
    // 自动播放尝试
    const playPromise = audio.play().catch(() => {
        // 如果自动播放被阻止，显示点击提示
        playerContainer.style.cursor = 'pointer';
        playerContainer.title = 'Click to start music';
    });

    // 设置循环播放
    audio.loop = true;  // 确保循环
    
    // 保留点击播放逻辑
    playerContainer.addEventListener('click', function initPlay() {
        audio.play();
        this.removeEventListener('click', initPlay);
    }, { once: true });
});

// 保持原有播放/暂停逻辑不变

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
