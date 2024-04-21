"use strict";
// Assign "Hello, World!" to this variable and print it.let greeting;
let greeting = "Hello World!";
console.log(greeting);
// Assign integer values and perform arithmetic operations
let num1, num2;
num1 = 10;
num2 = 20;
console.log(num1 + num2); //Plus
console.log(num1 - num2); //Mimus
console.log(num1 * num2); //Multiply
console.log(num1 / num2); //Divide
// Swap the values of two variables without using a third variable.
let a = 1, b = 2; // (method-1) Swap these values without using a new variable
console.log(a, b);
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
//(mehtod 2) swap values.
[a, b] = [b, a];
console.log(a, b); //back to original values.
//Create a string variable and try changing its type.
let message;
message = "123";
console.log(typeof message);
message = message;
console.log(message);
//Create a string variable and try changing its type.
let num3, num4;
num3 = 6;
num4 = 8;
console.log(num3 % num4);
//Increment a variable's value by 1 using two different methods.
let counter = 0;
counter += 1; //method 1
console.log(counter);
console.log("2nd method");
counter++; //mehtod 2
console.log(counter);
let i = true, j = false, k = true;
console.log(i || j || k); //bitwise OR
console.log(!(i || j || k)); //bitwise Not
console.log(i && j && k); //bitwise AND
console.log(num1 && num2); //compare left and right expression
//Show examples of using compound assignment operators.
let num = 10;
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);
//Write a program to check if a number is even or odd.
let numb;
numb = 7;
if (numb % 2 == 0) {
    console.log(numb + " is even");
}
else {
    console.log(numb + " is odd");
}
// Check if a person is eligible to vote.
let age;
age = 32;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
//Assign a grade based on a numerical score.
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
//Find the maximum of three numbers
let x = 10;
let y = 20;
let z = 30;
let Maximum = Math.max(x, y, z);
console.log("The largest number is: " + Maximum);
//Check if a given year is a leap year.
let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + " is a leap year");
}
else {
    console.log(year + " is not a leap year");
}
//Write a program that converts temperature from Fahrenheit to Celsius
let fahrenheit = 100;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit +
    " degrees Fahrenheit is equal to " +
    celsius +
    " degrees Celsius.");
//Check if a number is positive, negative, or zero.
let number = 10;
function getSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log("The number " + number + " is " + getSign(number) + ".");
console.log("2nd solution");
let number1 = 10;
if (number1 > 0) {
    console.log("The number " + number1 + " is positive.");
}
else if (number1 < 0) {
    console.log("The number " + number1 + " is negative.");
}
else {
    console.log("The number " + number1 + " is zero.");
}
// Write a program that prints the multiplication table of a given number up to 10.
let digit = 5; // You can change this value
for (let i = 1; i <= 10; i++) {
    console.log(`${digit} * ${i} = ${digit * i}`);
}
