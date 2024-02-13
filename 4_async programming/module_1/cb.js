const fs = require('fs');

console.log('First line');
// const data1 = fs.readFileSync('f1.txt');
// console.log('This is the data -> ' + data1);

// let data2 = fs.readFileSync('f2.txt');
// console.log('This is the data -> ' + data2)

fs.readFile('f1.txt' , cb1)
function cb1(err, data) {
    if(err){
        console.log(err)
    }

    console.log('File 1 data ->' + data)
}

fs.readFile('f2.txt' , cb2)
function cb2(err, data) {
    if(err){
        console.log(err)
    }

    console.log('File 1 data ->' + data)
}

console.log('Last line');