function addition(a,b) {
    console.log(a+b);
}

function substraction(a,b) {
    console.log(a-b);
}

function division(a,b) {
    console.log(a/b);
}

function modulus(a,b) {
    console.log(a%b);
}

function multiplication(a,b) {
    console.log(a*b);
}


module.exports = {
    addition : add,
    subtraction : sub,
    multiplication : mult,
    module: mod,
    division: div,
}