//  Chapter 20 - for loops nested
//  =============================

//  1. If an outer loop runs 3 times and an inner loop runs 5 times, how many times will the inner loop iterate? Answer with a numeral.

//  Answer:

//  15

//  2. The outer loop and inner loop can't share the same ______. Answer with one word.

//  Answer:

//  counter

//  3. What's missing from this code? Answer with a 6-letter word that starts with "i".

// for (var i = 0; i <= array1Length; i++) {
//   for (var j = 0; j < array2Length; j++) {
//     sumOfCounters = i + j;
//   }
//   }

//  Answer:

//  indent

//  4. In the following nonsensical code, how many times will the outer loop execute? Answer with a numeral.

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (j >= 1) {
//       break;
//     }
//   }
// }

//  Answer:

//  3

//  5. Code a nested loops that don't do anything.

//  Answer:

// for (var i = 0; i < firstVar.length; i++) {
//   for (var j = 0; j < secondVar.length; j++) {
//   }
// }

//  6. Code nested loops. Use i and j as counters. The outer loop runs 3 times. 
//  The inner loop runs 3 times each time the outer loop iterates. Use <. 
//  With each iteration of the inner loop, an alert displays showing the sum of the two counters.

//  Answer:

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     alert(i + j);
//   }
// }

//  7. Code an inner loop, including indentation, that doesn't do anything. 
//  Use any counter other than i. Use the usual starting value. 
//  Run it 10 times for each outer loop iteration. Increment by 1.

//  Answer:

// for (var j = 0; j < 10; j++) {
// }

//  8. Code an inner loop, including indentation, that displays a text message in an alert. 
//  Use any counter other than i. Declare it with the usual starting value. 
//  Run it 10 times for each outer loop iteration. Use <. Increment by 1.

//  Answer:

  // for (var j = 0; j < 10; j++) {
  //   alert("Cycle");
  // }

//  9. Code an inner loop, including indentation, that assigns a number to a variable that 
//  has been declared beforehand. Use any counter other than i. Declare it with the usual 
//  starting value. Limit iterations by the number of elements in an array. Increment by 1.

//  Answer:

  // for (var j = 0; j < arr1.length; j++) {
  //   arr2 = 7;
  // }

//  10. Code nested loops that do nothing. Start counters at zero. The outer loop runs 5 times. 
//  The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

//  Answer:

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//   }
// }

//  11. Code nested loops. The inner loop adds the two counters and assigns the sum to a variable 
//  that has been declared beforehand. Start counters at zero. The outer loop runs 5 times. 
//  The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

//  Answer:

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//     total = i + j;
//   }
// }

//  12. Here are 4 lines of code.

// var animals = ["goat", "cat", "crow"];
// var products = ["milk", "cheese", "burger"];
// var foodItems = [];
// var k = 0;

//  Continue the code to create nested loops. The inner loop concatenates each of the elements 
//  of animals with each of the elements of products, with no space separating them. 
//  Accumulate the combinations in foodItems. The counter for foodItems is k. 
//  Limit the number of loops by the length of each array.

//  Answer:

// for (var i = 0; i < animals.length; i++) {
//   for (var j = 0; j < products.length; j++) {
//     foodItems[k] = animals[i] + products[j];
//     k++;
//   }
// }

//  13. Time goal: 40 seconds. Code an inner loop, including indentation, that doesn't do anything. 
//  Use any counter other than i. Use the usual starting value. Run it 10 times for each iteration 
//  of the outer loop. Increment by 1.

//  Answer:

// for (var j = 0; j <= 10; j++) {
// }

//  14. Code an inner loop, including indentation, that displays a text message in an alert. 
//  Use any counter other than i. Declare it with the usual starting value. 
//  Run it 10 times for each outer loop iteration. Use <. Increment by 1.

//  Answer:

  // for (var j = 0; j < 10; j++) {
  //   alert("Cycle");
  // }

//  15. Code an inner loop, including indentation, that assigns a number to a variable that 
//  has been declared beforehand. Use any counter other than i. Declare it with the usual 
//  starting value. Limit iterations by the number of elements in an array. Increment by 1.

//  Answer:

  // for (var j = 0; j < arr1.length; j++) {
  //   arr2 = 7;
  // }

//  16. Code nested loops that do nothing. Start counters at zero. The outer loop runs 5 times. 
//  The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

//  Answer:

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//   }
// }

//  17. Time goal: 90 seconds. Code nested loops. The inner loop adds the two counters and assigns 
//  the sum to a variable that has been declared beforehand. Start counters at zero. 
//  The outer loop runs 5 times. The inner loop runs 5 times each time the outer loop iterates. 
//  Increment by 1.

//  Answer:

// for (var i = 0; i < 5; i++) {  
//   for (var j = 0; j < 5; j++) {
//     total = i + j;
//   }
// }

//  18. Here are 4 lines of code.

// var animals = ["goat", "cat", "crow"];
// var products = ["milk", "cheese", "burger"];
// var foodItems = [];
// var k = 0;

//  Continue the code to create nested loops. The inner loop concatenates each of the elements 
//  of animals with each of the elements of products, with no space separating them. 
//  Accumulate the combinations in foodItems. The counter for foodItems is k. 
//  Limit the number of loops by the length of each array.

//  Answer:

// for (var i = 0; i < animals.length; i++) {
//   for (var j = 0; j < products.length; j++) {
//     foodItems[k] = animals[i] + products[j];
//     k++;
//   }
// }

//  19. Live coding exercise:
//  - Code nested loops. The outer loop runs twice. The inner loop runs twice for each outer loop iteration.
//  - On each iteration of the inner loop, display the sum of the two counters in an alert.
//  - Click the Run It button to run your code live.

//  Answer:

// for (var i = 0; i < 2; i++) {
//   for (var j = 0; j < 2; j++) {
//     alert(i + j);
//   }
// }

//  20. Live coding exercise:
//  - Create two 2-element arrays.
//  - Create an empty array to accumulate concatenations. Create a counter for this array.
//  - Code nested loops that concatenate all the combinations of the array elements.
//  - After the loops have run, create an alert that displays the first combination.
//  - Click the Run It button to run your code live. (Only one alert should display.)

//  Answer:

// var fruits = ["lemon ", "orange "];
// var variations = ["juice", "curd"];
// var products = [];
// var h = 0;
// for (var i = 0; i < fruits.length; i++) {
//   for (var j = 0; j < variations.length; j++) {
//     products[h] = fruits[i] + variations[j];
//     h++;
//   }
// }
// alert(products[0]);
