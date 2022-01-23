//實現變寬的效果
function widen(obj, speed) {
    setInterval(function () {
        //獲得元素當前的寬度
        let oldWidth = obj.offsetWidth;

        //計算新的寬度
        let newWidth = oldWidth + 2;

        //將新的寬度賦值回去
        obj.style.width = newWidth + 'px';
    }, speed);
}

export {
    widen
};