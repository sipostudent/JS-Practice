/**
 *  Chapter 12 - if...else and else if statements
 *  ============================================= 
 */

//  1. What keyword specifies an action when all tests above have failed?

//  Answer:
//  else

//  2. What are the keywords that test for a condition when all tests above it have failed?

//  Answer:
//  else if

//  3. In one word, what type of statement is formatted the same way as else and else if?

//  Answer:
//  if

//  4. What is the last line of an else block?

//  Answer:
//  }

//  5. Create an else block that assigns the value of b to a.

//  Answer:
/*

 else {
    a = b;
  }

*/

//  6. Code an else block that displays an alert saying "Nope".

//  Answer:
/*

 else {
    alert("Nope");
  }

*/

//  7. Code an else if block that tests whether a has the same value as b. If so, display an alert that says "OK".

//  Answer:
// else if (a === b) {
//     alert("OK")}

//  8. Code an else block that assigns the value of one variable to another.

//  Answer:
// else {
//     num2 = num1;
// }

//  9. Code an else block that assigns a number to a variable and displays an alert specifying a string as the message. The variable has been declared beforehand.

//  Answer:
// else {
//     num1 = 1;
//     alert("Assigned");
// }

//  10. Code a block, that, if tests above it fail, checks whether one variable doesn't equal another and, if so, 
//  displays a prompt that assigns the user's response to a variable that has been declared beforehand.

//  Answer:
// else if (varOne !== varTwo) {
//     varThree = prompt("assigned value");
// }

//  11. Code an if statement that tests whether the value represented by a variable is greater 
//  than or equal to the value represented by another variable. If so, display an alert. If not, 
//  display a different alert.

// Answer:
// if (num1 >= num2) {
//     alert("bigger");
//   }
//   else {
//     alert("smaller");
//   }

//  12. Code an if statement that tests whether the value represented by a variable is less 
//  than the value represented by another variable. If so, display an alert. If not, test 
//  whether the value represented by the first variable is greater than the value represented 
//  by the second variable. If so, display a different alert.

//  Answer:
// if (num1 < num2) {
//     alert("smaller");
//   }
//   else if (num1 > num2) {
//     alert("bigger");
//   }

//  14. Time goal: 70 seconds. Code a block, that, if tests above it fail, checks whether one 
//  variable doesn't equal another and, if so, displays a prompt that assigns the user's response 
//  to a variable that has been declared beforehand.

//  Answer:
// else if (varOne !== varTwo) {
//     varThree = prompt("assigned value");
// }

//  14. Time goal: 45 seconds. Code an else block that assigns a number to a variable and displays 
//  an alert specifying a string as the message. The variable has been declared beforehand.

//  Answer:

// else {
//     num1 = 1;
//     alert("done");
// }

//  15. Code an if statement that tests whether the value represented by a variable is greater 
//  than or equal to the value represented by another variable. If so, display an alert. If not, 
//  display a different alert.

// Answer:
// if (num1 >= num2) {
//     alert("bigger");
//   }
//   else {
//     alert("smaller");
//   }

//  16. Time goal: 75 seconds. Code an if statement that tests whether the value represented 
//  by a variable is greater than or equal to the value represented by another variable. 
//  If so, display an alert. If not, display a different alert.

//  Answer:

// if (num1 >= num2) {
//     alert("Yes!");
// }
// else {
//     alert("No!");
// }

//  17. Code an if statement that tests whether the value represented by a variable is less 
//  than the value represented by another variable. If so, display an alert. If not, test 
//  whether the value represented by the first variable is greater than the value represented 
//  by the second variable. If so, display a different alert.

//  Answer:
// if (num1 < num2) {
//     alert("smaller");
//   }
//   else if (num1 > num2) {
//     alert("bigger");
//   }

//  18. Time goal: 40 seconds. This is the if statement that begins the code.

// if (a === 10) {
//   alert("a is 10");
// }

//   If a isn't 10, display an alert that says "a is " followed by the value of a.

//  Answer:
// else {
//     alert("a is " + a);
//   }

//  19. Live coding exercise:
//  - Prompt the user to enter a city.
//  - If the city is Akron, display an alert acknowledging it.
//  - If not, display an alert acknowledging it isn't Akron.
//  - Click the Run It button to run your code live.

// var yourCity = prompt("Enter your city");
// if (yourCity === "Akron") {
//   alert("Your city is Akron");
// }
// else {
//   alert("Akron is not your city");
// }

//  20. Live coding exercise:
//  - Prompt the user to enter a city.
//  - If the city is Akron, display an alert acknowledging it.
//  - If not, check to see if it's Buffalo.
//  - If it is, display an alert acknowledging it's Buffalo.
//  - Otherwise, display a different alert.
//  - Click the Run It button to run your code live.

//  Answer:

// var yourCity = prompt("Please enter your city");
// if (yourCity === "Akron") {
//   alert("Your city is Akron");
// }
// else if (yourCity === "Buffalo") {
//   alert("Your city is Buffalo");
// }
// else {
//   alert("Your city is not recognised");
// }

