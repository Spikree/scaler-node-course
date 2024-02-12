const fs = require('fs')

// // reading a file   
// let fileContent = fs.readFileSync('f1.txt');

// console.log('data of file 1 : ' + fileContent);

// // writing in a file
// fs.writeFileSync('f2.txt', 'This is file 2');
// console.log('The file has been edited')

// //append a file 
// fs.appendFileSync('f3.txt',' This is updated updated data');
// console.log('file has been updated');

// //deleting a file
// fs.unlinkSync('f2.txt');
// console.log('file has been deleted');


// create a directory
// fs.mkdirSync('myDirectory');

// check the content inside of this directory
// let folderPath = 'C:\\Users\\Avishkar\\Desktop\\javascript  tt\\node module system\\myDirectory';
// let folderContent = fs.readdirSync(folderPath);

// console.log("folder content", folderContent);

// check weather directory exists or not
// let doesExist = fs.existsSync('myDirectory');
// console.log(doesExist);

// Remove directory

fs.rmdirSync('myDirectory');
console.log('The file has been deleted');