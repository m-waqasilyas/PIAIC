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
console.log("-----");
//Create a string variable and try changing its type.
let num3, num4;
num3 = 6;
num4 = 8;
console.log(num3 % num4);
//Increment a variable's value by 1 using two different methods.
let counter = 0;
counter += 1; //method 1
console.log(counter);
counter++; //mehtod 2
console.log(counter);
console.log("-----");
let i = true, j = false, k = true;
console.log(i || j || k); //bitwise OR
console.log(!(i || j || k)); //bitwise Not
console.log(i && j && k); //bitwise AND
console.log(num1 && num2); //compare left and right expression
console.log("2nd paragraph");
let n1 = 3, n2 = 2;
console.log(n1 == n2); //compares values for equality after performing type conversions
console.log(n1 === n2); //compares without conversion (Strict equality)
console.log(n1 != n2); //inequality
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 <= n2);
console.log(n1 >= n2);
