// script.js

// Part 1: Declaring and Invoking Functions
function greet(name) {
  if (name === undefined) {
    console.log(`Hello stranger`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet();
greet("Lukas");

// Part 2: Working with Parameters and Returning Values
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(`1 + 3 = ${addNumbers(1, 3)}`);

// Part 3: Function Scope
let x = 10;

function changeValue() {
  let x = 20;
  console.log(`x inside the function = ${x}`);
}

changeValue();
console.log(`x outside the function = ${x}`);

// Part 4: Closures
function outerFunction() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = outerFunction();

for (i = 0; i < 10; i++) {
  console.log(`count = ${increment()}`);
}
