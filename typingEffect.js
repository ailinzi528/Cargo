// typingEffect.js

// 逐字显示函数
function typeText(element, text, speed) {
    let index = 0;
    function typing() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 选择需要应用效果的元素
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        const textToType = typingElement.innerHTML;
        typingElement.innerHTML = ''; // 清空原有文本
        typeText(typingElement, textToType, 100); // 100ms 的打字速度
    }
});
