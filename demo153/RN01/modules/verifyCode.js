let getVerifyCode = function (length) {
    let rs = [];
    const datas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
        , 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
        , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'
        , 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < length; i++) {
        let data = Math.floor(Math.random() * datas.length);
        rs[i] = datas[data];
    }

    return rs;
};

export { getVerifyCode };