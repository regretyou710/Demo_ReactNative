//導入的時候變量名要和模塊中導出的變量名一致
//如果涉及到模塊地引入和導出，需要用http協議打開頁面
//import用來引入其他模塊
//普通數據可以導出，函數也可以導出
import {
    hd,
    url,
    foo
} from './b.js';

console.log(hd);
console.log(url);

foo(6);