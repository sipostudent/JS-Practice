//  Chapter 19 - for loops: flags, Booleans, array length, and loopus interruptus
//  =============================================================================

//  1. In one word, what is a flag?

//  Answer:

//  variable

//  2. What is the keyword that stops a loop from continuing to loop?

//  Answer:

//  break

//  3. There are two Booleans. Name either one of them.

//  Answer:

//  false 

//  4. The statement assigns the number of elements in the array to the variable. Fill in te blank.

//  var num = generals.______;

//  Answer

//  length

//  5. Set a flag.

//  Answer:

//  var matchFound = false;

//  6. Find the number of elements in the array cities and assign the number to the variable numCities, 
//  which hasn't been declared beforehand.

//  Answer:

//  var numCities = cities.length;

//  7. Code two lines. The first line reverses the flag x, which was originally set to the positive Boolean. 
//  The second line stops the looping.

//  Answer:

//  x = false;
//  break;

//  8. Set a flag with an initial Boolean value of your choice.

//  Answer:

//  var x = true;

//  9. Find the number of elements in an array and assign the number to a variable, which hasn't been declared beforehand.

//  Answer:

//  var x = y.length;

//  10. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. 
//  Limit the number of loops by the number of elements in the array pets.

//  Answer:

//  for (var i = 0; i < pets.length; i++) {

//  11. In 3 statements, assign a number to a variable that's already been declared, assign a 
//  Boolean (either one) to a flag that's already been declared, and interrupt a loop. 
//  Don't indent any of the lines.

//  Answer:

//  arr1 = 7;
//  arr2 = true;
//  break;

//  12. Complete this code to display an alert if a match isn't found.

// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }

//  Answer:

// if (matchFound === false) {
//   alert("Match not found");
// }

//  13. Time goal: 25 seconds. Find the number of elements in the array cities and assign the number to 
//  the variable numCities, which hasn't been declared beforehand.

//  Answer:

//  var numCities = cities.length;

//  14. Time goal: 25 seconds. Declare a flag and assign it a Boolean value of your choice.

//  Answer:

//  var x = true;

//  15. Time goal: 30 seconds. Find the number of elements in an array and assign the number to a variable, 
//  which hasn't been declared beforehand.

//  Answer:

//  var list = arr.length;

//  16. Time goal: 45 seconds. Code the first line of a for loop with the usual counter, the usual starting value, 
//  and the usual incrementing. Limit the number of loops by the number of elements in the array pets.

//  Answer:

//  for (var i = 0; i < pets.length; i++) {

//  17. Time goal: 50 seconds. In 3 statements, assign a number to a variable that's already been declared, assign a 
//  Boolean (either one) to a flag that's already been declared, and interrupt a loop. 
//  Don't indent any of the lines.

//  Answer:

// arr1 = 7;
// arr2 = true;
// break;

//  18. Time goal: 45 seconds. Complete this code to display an alert if a match isn't found.

// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }

//  Answer:

// if (matchFound === false) {
//   alert("Match not found");
// }

//  19. Live coding exercise:
//  - Set a for loop to run 10 iterations.
//  - On the second iteration, display the counter in an alert. (It should be 1.)
//  - Break out of the loop
//  - Click the Run It button to run your code live.

//  Answer:

// for (var i = 0; i < 10; i++) {
//   if (i === 1) {
//     alert(i);
//     break;
//   }
// }

//  20. Live coding exercise:
//  - Create an array with 2 number elements.
//  - Set a for loop, limiting the number of iterations using the length keyword.
//  - Loop through the array to test whether each of the elements
//  - matches itself. (It will. )
//  - When a match is found, display an alert with the number (it should be your first number) and stop the loop.
//  - Click the Run It button to run your code live. (Only one alert should display.)

//  Answer:

// var nums = [10, 20];
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] === nums[i]) {
//     alert(nums[i]);
//     break;
//   }
// }