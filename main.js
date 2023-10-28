let firstNumber = 1;
let secondNumber = 2;
// ---------- Function 1 -----------------
function sum (a, b) {
    let result = a + b;
    return a + b
}

// sum (firstNumber, secondNumber)

sum (firstNumber, secondNumber)
sum(40, 30)

const additionResult = sum(10, 20)
console.log(additionResult)

// ---------- Function 2 -----------------
function fullName(firstName, lastName) {
    return (firstName + " " + lastName)
}

console.log(fullName(`Mihai`, `Hotca`))

// ---------- Function 3 -----------------
function compare (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(compare(30, 40))

// ---------- Function 4 -----------------

function evenNumber (a) {
    if (a % 2 ===  0) {
        return (a + " " + "is an even number");
    }
     return ( a + " " + "is not an even number");
}

console.log(evenNumber(10))
console.log(evenNumber(11))