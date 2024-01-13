// #region BodyColor Change 

var bodyColor = document.getElementById('bodyColor')

bodyColor.addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

// #endregion 

// #region LoadingColor Change

var loadingColor = document.getElementById('loadingColor')

loadingColor.addEventListener('input', function() {

    var boxes = document.getElementsByClassName('box');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = this.value;
    }

    var rgb = getRgb(this.value);

    var hiddingElement = document.getElementById('dynamic-styles');
    if (!hiddingElement) {
        hiddingElement = document.createElement('style');
        hiddingElement.id = 'dynamic-styles';
        document.head.appendChild(hiddingElement);
    }
    hiddingElement.textContent = `
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

// #endregion

// #region TextColor Change 

var textColor = document.getElementById('textColor')

textColor.addEventListener('input', function() {

    var hiddingElement = document.getElementById('dynamic-styles');
    if (!hiddingElement) {
        hiddingElement = document.createElement('style');
        hiddingElement.id = 'dynamic-styles';
        document.head.appendChild(hiddingElement);
    }
    hiddingElement.textContent = `
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

// #endregion

// #region Get RGB from HEX 

function getRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// #endregion
