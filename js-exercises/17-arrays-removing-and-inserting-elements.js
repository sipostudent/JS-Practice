//  Chapter 17 - Arrays: Removing and inserting elements
//  ====================================================

//  1. What keyword removes the first element of an array?

//  Answer:

//  shift

//  2. What keyword adds one or more elements to the beginning of an array?

//  Answer:

//  unshift

//  3. What keyword inserts new elements anywhere in an array and/or removes elements from an array?

//  Answer:

//  splice

//  4. What keyword copies elements from an array to another array?

//  Answer:

//  slice

//  5. Drag-and-drop. Holding down the left mouse button, drag the pieces to add "cake" and "cookie" to the beginning of the array sweets.

//  Answer:

//  sweets.unshift("cake", "cookie");

//  6. This statement created the array:
//  var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//  Insert "L" into the array between "M" and "XL".

//  Answer:

//  sizes.splice(2, 0, "L");

//  7. This statement created the array:
//  var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//  Copy the first 3 sizes of the array and put them into a new array, regSizes.

//  Answer:

//  var regSizes = sizes.slice(0, 3);

//  8. Remove the first element of an array.

//  Answer:

//  airlines.shift();

//  9. Add three number elements to the beginning of an array.

//  Answer:

//  scores.unshift(0, 13, 5);

//  10. This statement created the array:
//  var pets = ["dog", "cat", "ox", "duck", "frog"];
//  Add 2 elements after "dog" and remove "cat", "ox", and "duck".

//  Answer:

//  pets.splice(1, 3, "Pigeon", "Sheep");

//  11. This statement created the array:
//  var pets = ["dog", "cat", "ox", "duck", "frog"];
//  Remove "cat" and "ox".

//  Answer

//  pets.splice(1, 2);

//  12. This statement created the array:
//  var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
//  Reduce it to "duck" and "frog" using slice.

//  Answer:

//  pets = pets.slice(3, 5);

//  13. Time goal: 25 seconds. Remove the first element of an array.

//  Answer:

//  pets.shift();

//  14. Time goal: 30 seconds. Add three number elements to the beginning of an array.

//  Answer:

//  scores.unshift(0, 13, 5);

//  15. Time goal: 50 seconds. This statement created the array:
//  var pets = ["dog", "cat", "ox", "duck", "frog"];
//  Add 2 elements after "dog" and remove "cat", "ox", and "duck".

//  Answer:

//  pets.splice(1, 3, "Bear", "Bird");

//  16. Time goal: 25 seconds. This statement created the array:
//  var pets = ["dog", "cat", "ox", "duck", "frog"];
//  Remove "cat" and "ox".

//  Answer:

//  pets.splice(1, 2);

//  17. Time goal: 50 seconds. This statement created the array:
//  var pets = ["dog", "cat", "ox", "duck", "frog"];
//  Reduce it to "duck" and "frog" using slice.

//  Answer:

//  pets = pets.slice(3, 5);

//  18. Time goal: 50 seconds. This statement created the array:
//  var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//  Insert "L" into the array between "M" and "XL".

//  Answer:

//  sizes = sizes.splice(2, 0, "L");

//  19. Live coding exercise:
//  - Declare an array with one element.
//  - Add a second element to the beginning of the array.
//  - Create an alert whose message is the new first element.
//  - Click the Run It button to run your code live.

//  Answer:

// var arr = ["Sugar"];
// arr.unshift("Coffee");
// alert(arr[0]);

//  20. Live coding exercise:
//  - Declare an array with two elements.
//  - Remove the first element.
//  - Create an alert whose message is the new first element.
//  - Click the Run It button to run your code live.

//  Answer:

// var arr = [1, 2];
// arr.shift();
// alert(arr[0]);

