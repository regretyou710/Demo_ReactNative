//模塊當中定義的變量，作用範圍不會超過模塊(模塊是獨立的作用域)

//導入模塊
import {
    randColor
} from './randColor.js';

import {
    widen
} from './widen.js';

//獲取元素
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');

//讓a元素變色
randColor(a);

//讓b元素變寬
widen(b,500);

//讓c元素變顏色並且變寬
randColor(c);
widen(c,100);