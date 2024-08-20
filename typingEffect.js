// typingEffect.js
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".typewrite"); // 使用 .typewrite 类名来标识需要应用效果的元素
    const speed = 50; // 设置打字速度
    
    elements.forEach(function(element) {
        typeEffect(element, speed);
    });
});
