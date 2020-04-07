//  Chapter 13 - Testing sets of conditions
//  =======================================

//  1. Type the operator that means and.

//  Answer:
//  &&

//  2. Type the operator that means or.

//  Answer:
//  ||

//  3. When both sides of an operator have to be true to pass the test, what operator is it? Type it.

//  Answer:

//  &&

//  4. When, if either or both sides of an operator is (are) true, the test passes, what operator is it? Type it.

//  Answer:

//  ||

//  5. Create the first line of an if statement that tests whether both are true: firstName is "Bugs" and lastName is "Bunny".

//  Answer:

//  if (firstName === "Bugs" && lastName === "Bunny") {

//  6. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

//  Answer:

//  if (a === b && c === d) {

//  7. Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.

//  Answer:

//  if (a === b || c !== d) {

//  8. Code the first line of an if statement that tests whether both are true: a first variable equals a second variable and also equals a third variable.

//  Answer:

//  if (a === b && a === c) {

//  9. Code the first line of an if statement that tests whether either is true: a variable is less than or equal to a particular number or whether that same variable is greater than or equal to a second number.

//  Answer:

//  if (num1 <= 7 || num1 >= 3) {

//  10. Code the first line of an if statement that tests whether (1) name is either "Ace" or "Bud" and (2) age is greater than 60.

//  Answer:

//  if ((name === "Ace" || name === "Bud") && age > 60) {

//  11. Code the first line of an if statement that tests whether (1) name is "Ace" and age is greater than 60 or (2) name is "Bud".

//  Answer:

//  if ((name === "Ace" && age > 60) || name === "Bud") {

//  12. Code the first line of an if statement that tests whether (1) name is "Ace" and age is greater than 60 or (2) name is "Bud" or age is under 6.

//  Answer:

//  Code the first line of an if statement that tests whether (1) name is "Ace" and age is greater than 60 or (2) name is "Bud" or age is under 6.

//  Answer:

//  if ((name === "Ace" && age > 60) || (name === "Bud" || age < 6)) {

//  13. Time goal: 30 seconds. Code the first line of an if statement that tests whether both are true: a first variable equals a second variable and also equals a third variable.

//  Answer:

//  if (num1 === num2 && num1 === num3) {

//  14. Time goal: 45 seconds. Code the first line of an if statement that tests whether either is true: a variable is less than or equal to a particular number or whether that same variable is greater than or equal to a second number.

//  Answer:

//  if (num1 <= 7 || num1 >= 3) {

//  15. Time goal: 55 seconds. Code the first line of an if statement that tests whether (1) name is either "Ace" or "Bud" and (2) age is greater than 60.

//  Answer:

//  if ((name === "Ace" || name === "Bud") && age > 60) {

//  16. Time goal: 55 seconds. Code the first line of an if statement that tests whether (1) name is "Ace" and age is greater than 60 or (2) name is "Bud".

//  Answer:

//  if ((name === "Ace" && age > 60) || name === "Bud") {

//  17. Time goal: 90 seconds. Code the first line of an if statement that tests whether (1) name is "Ace" and age is greater than 60 or (2) name is "Bud" or age is under 6.

//  Answer:

//  if ((name === "Ace" && age > 60) || (name === "Bud" || age < 6)) {

//  18. Time goal: 90 seconds. Code an if statement that tests whether (1) a is less than b or (2) c is greater than d or c is equal to e. If so, display an alert.

//  Answer:

// if (a < b || (c > d || c === e)) {
//     alert("Something is true");
//   }

//  19.

//  Answer
// var varOne = 1;
// var varTwo = 2;
// if (varOne < varTwo || varOne > varTwo) {
//   alert("ta dah!")
// }

//  20. Live coding exercise:
//  - Declare 2 variables. Assign one of them your first name and the other one your last name.
//  - Code 2 prompts, asking for your first and your last name.
//  - If your answers match the two variables, display an alert.
//  - Click the Run It button to run your code live.

// var firstName = "Sipo";
// var lastName = "Charles";

// var firstNameRequest = prompt("What is your first name?");
// var lastNameRequest = prompt("What is your surname?");

// if (firstNameRequest === firstName && lastNameRequest === lastName) {
//     alert("Your name full name is " + firstName + " " + lastName);
// }