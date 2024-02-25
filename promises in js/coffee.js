function placeOrder(drink) {
    return new Promise((resolve, reject) => {
        if (drink === 'coffee') {
            resolve('Order for coffee recived');
        } else {
            reject('Other orders rejected');
        }
    })
}

function processOrder(order) {
    return new Promise ((resolve) => {
        console.log("Order is being processed");
        resolve(`${order} is ready to be served`);
    })
}

placeOrder('coffee').then(function(orderPlaced) {
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced);
    return orderIsProcessed;
}).then((processOrder) => {
    console.log(processOrder);
})

