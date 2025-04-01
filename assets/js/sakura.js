(function() {
    // 创建花瓣的函数
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        
        // 随机位置、动画时长和延迟
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 5 + 's'; // 5-8秒
        petal.style.animationDelay = Math.random() * 5 + 's'; // 0-5秒延迟
        
        document.body.appendChild(petal);
        
        // 动画结束后移除花瓣
        setTimeout(() => petal.remove(), 8000);
    }

    // 控制花瓣生成频率（每0.5秒一个）
    function startSakura() {
        setInterval(createPetal, 500);
    }

    // 页面加载完成后启动
    window.addEventListener('DOMContentLoaded', startSakura);
})();
