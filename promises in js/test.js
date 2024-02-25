// how to produce a promise

let myPromise = new Promise(function(resolve, reject ) {
    const a = 4;
    const b = 3;

    setTimeout(() => {
        if (a===b) {
            resolve('The values are equal');
        } else {
            reject('The values were not equal');
        }
    }, 1000)
});

// console.log(myPromise)

// myPromise.then((result) => {
//     console.log(result);
// })

myPromise.catch(function(err) {
    console.log(err);
})