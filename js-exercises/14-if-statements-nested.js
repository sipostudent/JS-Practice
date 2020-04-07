//  Chapter - 14 if Statements
//  ==========================

//  1. An alternative to using && to test multiple conditions in a single if statement is ______ ifs.

//  Answer:

//  nested

//  2. You communicate the nesting to JavaScript with the placement of what two characters? Don't type a space between them.

//  Answer:

//  {}

//  3. How do you make nested ifs readable? Answer with 1 lower-case verb.

//  Answer:

//  indented

//  4. This is the first line of an if statement.

//  if (a !== b) {

//  Enter the first 6 characters of the next line, which is a second-level if.

//  Answer:
//  if () {}

//  5. create an if statement enclosing a nested if. If a equals b, then if c equals d, then f is assigned e.

//  Answer:

// if (a === b) {
//     if (c === d) {
//       e = f;
//     }
//   }

//  6. Code the first line of an if statement that's followed by the first line of a nested if. If a equals b, then if c doesn't equal d....

//  Answer:

// if (a === b) {
//     if (c !== d) {
// }

//  7. Code an if statement enclosing a nested if. If a equals 1, then if c equals "Max", then display an alert that says "OK".

//  Answer:

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

//  8. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

//  Answer:

//  if (a === 1 && c === "Max") {

//  9. Code the first lines of nested if statements that test the same conditions as the above code.
//  if (a !== 0 && b > 1) {

//  Answer:

// if (a !== 0) {
//   if (b > 1) {

//   }
// }

//  10. Code the first lines of nested if statements that test the same conditions as the above code.
//  if (a !== 0 && b > 1 && c < 1) {

//  Answer:

if (a !== 0) {
  if (b > 1) {
    if (c < 1) {

    }
  }
}

//  11. Code nested if statements that test whether a first variable equals a particular number and whether a second variable equals another number. If so, display an alert message.

//  Answer:

// if (num1 === 7) {
//   if (num2 === 3) {
//     alert("It's a match!");
//   }
// }

//  12. Code nested if statements that test whether a first variable equals a second variable, whether a third variable doesn't equal a fourth variable, and whether a fifth variable is greater than a sixth variable. If all tests pass, assign a number value to a seventh variable, which hasn't been declared beforehand.

//  Answer:

// if (num1 === num2) {
//   if (num3 !== num4) {
//     if (num5 > num6) {
//       var num7 = 4;
//     }
//   }
// }

//  13. Time goal: 15 seconds. This is the first line of an if statement.
//  if (a !== b) {

//  Enter the first 6 characters of the next line, which is a second-level if.

//  Answer:

//    if (

//  14. Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.

//  Time goal: 35 seconds.
// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

// Answer:

//  if (a === 1 && c === "Max") {

//  15. Time goal: 40 seconds.
//  if (a !== 0 && b > 1) {
//  Code the first lines of nested if statements that test the same conditions as the above code.

//  Answer:

// if (a !== 0) {
//   if (b > 1) {

//   }
// }

//  16.

//  17.

//  18.

//  19. Live coding exercise:
//  - Declare two variables and assign them the same number value.
//  - Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.
//  - Click the Run It button to run your code live.

//  Answer:

// var num1 = 7;
// var num2 = 7;

// if (num1 === num2) {
//   if (num1 <= num2) {
//     alert("Pass");
//   }
// }

//  20. Live coding exercise:
//  - Declare 2 variables. Assign one of them your first name and the other one your last name.
//  - Code 2 prompts, asking for your first and your last name.
//  - Using nested if statements, test whether your answers match the two variables. If so, display an alert.
//  - Click the Run It button to run your code live.

//  Answer:

// var firstName = "Sipo";
// var lastName = "Charles";

// var forename = prompt("What is your first name?");
// var surname = prompt("What is your surname?");

// if (forename === firstName) {
//   if (surname === lastName) {
//     alert("This is your name");
//   }
// }

