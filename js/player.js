// 文件位置：js/player.js 

// 修改缩放函数
function adjustPlayerSize() {
    const player = document.querySelector('.player-container');
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 400) {
        player.style.transform = 'translateX(-50%) scale(0.65)'; // 更极致的缩放
    } else if (screenWidth < 768) {
        player.style.transform = 'translateX(-50%) scale(0.7)';
    } else {
        player.style.transform = 'translateX(-50%) scale(0.8)';
    }
}

// 在原有触摸事件处理函数中添加防误触
let isTouching = false;
function handleProgressTouch(e) {
    isTouching = true;
    // ...原有逻辑...
    isTouching = false;
}