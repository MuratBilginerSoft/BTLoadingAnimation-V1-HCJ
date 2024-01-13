var bodyColor = document.getElementById('bodyColor')

bodyColor.addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});


document.getElementById('loadingColor').addEventListener('input', function() {
    var boxes = document.getElementsByClassName('box');

    console.log(boxes);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = this.value;
    }

    var rgb = getRgb(this.value);

    var styleElement2 = document.getElementById('dynamic-styles');
    if (!styleElement2) {
        styleElement2 = document.createElement('style');
        styleElement2.id = 'dynamic-styles';
        document.head.appendChild(styleElement2);
    }
    styleElement2.textContent = `
        @keyframes loadingAnimate{
            0%{
                box-shadow: 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5);
                opacity: 0;
                transform: translate(-50px) scale(1)
            }
            50%{
                box-shadow: 0 10px 20px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5);
                opacity: 1;
                transform: translate(0px) scale(2)
            }
            100%{
                box-shadow: 0 0 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5);
                opacity: 0;
                transform: translate(50px) scale(1)
            }
            
        }
    `;
});

function getRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


document.getElementById('textColor').addEventListener('input', function() {
    var styleElement = document.getElementById('dynamic-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'dynamic-styles';
        document.head.appendChild(styleElement);
    }
    styleElement.textContent = `
        @keyframes titleAnimate {
            0% {
                color: #ffffff;
            }
            50% {
                color: ${this.value};
            }
            100% {
                color: #ffffff;
            }
        }
    `;
});