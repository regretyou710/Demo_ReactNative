//實現隨機變顏色的效果
function randColor(obj) {
    setInterval(function () {
        //生成隨機顏色
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        obj.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    }, 500)
}

export {
    randColor
};