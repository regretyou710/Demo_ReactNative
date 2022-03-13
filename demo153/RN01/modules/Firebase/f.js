let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {

        console.log('p1');

        resolve();
       
        // reject();
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    console.log('p2');
    // resolve();
    reject();
});

let p3 = Promise.all([p1, p2]);

p3.then(() =>{

    console.log('p3');
});