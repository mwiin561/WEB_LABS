// Part 3: Basic JavaScript Concepts

// Writing my First JavaScript
console.log("Hello, World!");

// Variables and Data Types
let num = 42;
let greeting = "Hello, ";

// Part 4: ES6 Features

// Constants with const
const PI = 3.14;

// Template Literals
let person = "John";
let message = `${greeting}${person}!`;

// Arrow Functions
const square = (x) => x * x;

// Let vs. Var
if (true) {
    let blockScopedVar = "I am block-scoped";
}

// Part 5: Basic Interactivity

// Alert and Confirm Boxes
function displayGreeting() {
    alert(message);
}

// Prompt for User Input
function resetForm() {
    let isConfirmed = confirm("Are you sure you want to reset the form?");
    if (isConfirmed) {
        document.getElementById("myForm").reset();
        document.getElementById("output").innerText = "";
    }
}
