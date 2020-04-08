//  Chapter 18 - Loops
//  ==================

//  1. What are the 5 characters missing from this code, excluding any spaces that are missing? 
//  Type them in order, with no spaces or commas between them.

//  for var i = 0 i <= 4 i++

//  Answer:

//  (;;){

//  2. Use the conventional counter name and the usual count start to fill in the blank.
//  for (_________; i <= 4; i++) {

//  Answer:

// var i = 0;

//  3. The loop is to run 10 times. Fill in the blank, using either of the 2 acceptable ways 
//  to specify the number of loops.

//  for (var i = 0; _____; i++) {

//  Answer:

//   i <= 9

//  4. The counter is to increment after each loop. Fill in the blank.
//  for (var i = 0; i <= 9; ____) {

//  Answer:

//  i++

//  5. Code the first line of a for loop whose counter starts at 0. The loop runs 6 times.

//  Answer:

//  for (var i = 0; i <= 5; i++) {

//  6. Code the first 15 characters of a for loop with the usual counter name and usual starting value.

//  Answer:

//  for (var i = 0;

//  7. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

//  Answer:

//  for (var i = 0; i <= 11; i++) {

//  8. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 4 times using < to specify how many loops.

//  Answer:

//  for (var i = 0; i < 4; i++) {

//  9. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. 
//  Run it 100 times using < to specify how many loops.

//  Answer:

//  for (var x = 0; x < 100; x++) {

//  10. Code the first line of a for loop with the usual counter and the usual starting value. 
//  Run it 3 times using > to specify how many loops. Decrement it with each iteration.

//  Answer:

//  for (var i = 0; i > -3; i--) {

//  11. Code a loop using the usual conventions and < that displays an alert containing a string 50 times.

//  Answer:

// for (var i = 0; i < 50; i++) {
//     alert("Repeat Me!");
// }

//  12. Code a loop using the usual conventions and < that tests each element of a 5-element array, answers, 
//  to see if it has the value "yes". If so, a variable, already declared, is assigned a positive, single-digit integer. 
//  Use a number, not the array length, to limit the number of loops.

//  Answer:

// for (var i = 0; i < 5; i++) {
//   if (answers[i] === "yes") {
//     positive = 1;
//   }
// }

//  13. Time goal: 25 seconds. The loop is to run 10 times. Fill in the blank, using either of the 2 acceptable ways 
//  to specify the number of loops.

//  for (var i = 0; _____; i++) {

//  Answer:

//   i <= 9

//  14. Time goal: 40 seconds. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 4 times using < to specify how many loops.

//  Answer:

//  for (var i = 0; i < 4; i++) {

//  15. Time goal: 40 seconds. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

//  Answer:

//  for (var x = 0; x < 100; x++) {

//  16. Time goal: 40 seconds. Code the first line of a for loop with the usual counter and the usual starting value. 
//  Run it 3 times using > to specify how many loops. Decrement it with each iteration.

//  Answer:

//  for (var i = 0; i > -3; i--) {

//  17. Time goal: 60 seconds. Code a loop using the usual conventions and < that displays an alert containing a string 50 times.

//  Answer:

// for (var i = 0; i < 50; i++) {
//     alert("Repeat Me!");
// }

//  18. 

// for (var i = 0; i < 5; i++) {
//   if (answers[i] === "yes") {
//     positive = 1;
//   }
// }

//  19. Live coding exercise:
//  - Code a for loop that displays an alert twice.
//  - Click the Run It button to run your code live.

//  Answer:

// for (var i = 0; i < 2; i++) {
//   alert("Say Hello Twice!");
// }

//  20. Live coding exercise:
//  - Create an array with 2 number elements.
//  - Loop through the array to test whether each of the elements
//  - matches itself. (It will. )
//  - Create an alert whose message is the element.
//  - Click the Run It button to run your code live. (Two alerts should display.)

//  Answer:

// var nums = [1, 2];
// for (var i = 0; i < 2; i++) {
//   if (nums[i] === nums[i]) {
//     alert(nums[i]);
//   }
// }


