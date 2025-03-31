// js/music-player.js

// 音乐列表配置
const musicFiles = [
    { title: '示情 - 范文芳', url: '/music/范文芳 - 示情.mp3' }
];

// 音频对象
let audio = new Audio();
let currentTrack = 0;

// 初始化函数
function initPlayer() {
    // 绑定事件监听等
}

// 控制函数
function togglePlay() { /* ... */ }
function nextTrack() { /* ... */ }

// 页面加载初始化
window.addEventListener('DOMContentLoaded', initPlayer);

// 在music-player.js中添加
// 读取保存的状态
if(localStorage.getItem('volume')) {
    audio.volume = localStorage.getItem('volume');
}

// 保存状态
function setVolume(val) {
    localStorage.setItem('volume', val);
    audio.volume = val;
}