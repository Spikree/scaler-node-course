function add(a,b) {
    console.log(a+b);
}

function sub(a,b) {
    console.log(a-b);
}

function div(a,b) {
    console.log(a/b);
}

function mod(a,b) {
    console.log(a%b);
}

function mult(a,b) {
    console.log(a*b);
}


module.exports = {
    addition : add,
    subtraction : sub,
    multiplication : mult,
    module: mod,
    division: div,
}