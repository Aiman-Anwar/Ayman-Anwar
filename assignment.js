//task: 1
var lenght = 17;
var width = 14;
//calculate the area//
area = lenght * width;

//calculate the perimeter//
perimeter = 2 * (lenght + width);

//result
console.log("The area of rectangle is:" + area);
console.log("The perimeter of rectangle is:" + perimeter);

//**task: 3 */
var a = 5 
if (a>10){
    console.log("the program is working")
}
else{
    console.log("the program is not working")
}
document.write=a 

//**task: 4 */
// let number = prompt("Enter a number");

// if (number % 3 ===0 && 5 ===0){
//  console.log(`${number} is divisible by both 3 and 5.`);
//  alert(`${number} is divisible by both 3 and 5.`);
// }
// else {
//     console.log(`${number} is not divisible by 3 and 5.`);
//     alert(`${number} is not divisible by 3 and 5.`);
// }

//**task: 7 */
// let number = prompt("Enter a number:")

// number = parseInt(number);

// if (number % 2===0){
//     console.log(`${number} is even`);
//     alert(`${number} is even.`);
// }
// else {
//     console.log(`${number} is odd.`);
//     alert(`${number} is odd.`);
// }

//**task: 8 */
// let age = prompt("Please enter your age.")
//convert the input to a number age = Number(age).
// if (age>18){
//     console.log("You are eligible to vote.");
// }
// else{
//     console.log("you are not eligible to vote.")
// }

//task: 13
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");
if (operation === "+") {
    result = num1 + num2;
    alert("The result of " + num1 + " + " + num2 + " is: " + result);
} else if (operation === "-") {
    result = num1 - num2;
    alert("The result of " + num1 + " - " + num2 + " is: " + result);
} else if (operation === "*") {
    result = num1 * num2;
    alert("The result of " + num1 + " * " + num2 + " is: " + result);
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
        alert("The result of " + num1 + " / " + num2 + " is: " + result);
    } else {
        alert("Error: Division by zero is not allowed!");
    }
} else {
    alert("Invalid operation! Please enter one of the following: +, -, *, /");
}

