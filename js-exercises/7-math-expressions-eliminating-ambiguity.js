//  Chapter 7 - Math expressions: Eliminating ambiguity
//  ===================================================

//  1. calculatedNum = 2 + (2 * 6);
//  What is the value of calculatedNum?

//  Answer:
//  14

//  2. calculatedNum = (2 + 2) * 6;
//  What is the value of calculatedNum?

//  Answer:
//  24

//  3. calculatedNum = (2 + 2) * (4 + 2);
//  What is the value of calculatedNum?

//  Answer:
//  24

//  4. calculatedNum = ((2 + 2) * 4) + 2;
//  What is the value of calculatedNum?

//  Answer:
//  18

//  5. Drag-and-drop. Holding down the left mouse button, drag the pieces to create 
//  a statement that assigns to num the result of 10 + 2 * 4, clarified with parentheses, 
//  producing 48.

//  Answer:
//  var num = (10 + 2) * 4;

//  6. Click in the box and type the next character. I'll autocomplete. Don't type spaces.
//  Write a statement that assigns to num the result of 10 + 2 * 4, clarified with parentheses, 
//  producing 18. The variable hasn't been declared beforehand.

//  Answer:
//  var num = 10 + (2 * 4);

//  7. Fail-safe coding. If you type the wrong character, I'll cancel the keystroke. Type spaces.
//  Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, 
//  producing 56. The variable hasn't been declared beforehand.

//  Answer:
//  var cost = (2 + 2) * (4 + 10);

//  8. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with 
//  parentheses, producing 20. The variable hasn't been declared beforehand.

//  Answer:
//  var units = 2 + (2 * 4) + 10;

//  9. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with 
//  parentheses, producing .5. The variable hasn't been declared beforehand.

//  Answer:
//  var pressure = 4 / (2 * 4);

//  10. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with 
//  parentheses, producing 8. The variable hasn't been declared beforehand.

//  Answer:
//  var pressure = (4 / 2) * 4;

//  11. Write a statement that assigns to a variable the result of adding two variables 
//  together and then afterward multiplying the result of the addition by another variable. 
//  The first variable has been declared beforehand.

//  Answer:
//  var result = (varOne + varTwo) * varThree;

//  12. Write a statement that assigns to a variable the result of 4 / 2 * 4 - 1, 
//  clarified with parentheses, producing -.5. The variable hasn't been declared beforehand.

//  Answer:
//  var x = (4 / (2 * 4)) - 1;
//  or
//  var x = 4 / (2 * 4) - 1;

//  13. Time goal: 40 seconds. (The timer starts when you click in the answer field.) 
//  Write a statement that assigns to a variable the result of the following calculation: 
//  2 numbers added together, with the result multiplied by a third number. The variable hasn't 
//  been declared beforehand.

//  Answer:
//  var result = (2 + 2) * 3;

//  14. Time goal: 45 seconds. Write a statement that assigns to units the result 
//  of 2 + 2 * 4 + 10, clarified with parentheses, producing 20. The variable hasn't been 
//  declared beforehand.

//  Answer:
//  var units = 2 + (2 * 4) + 10;

//  15. Time goal: 40 seconds. Write a statement that assigns to pressure the result of 
//  4 / 2 * 4, clarified with parentheses, producing .5. 
//  The variable hasn't been declared beforehand.

//  Answer:
//  var pressure = 4 / (2 * 4);

//  16. Time goal: 40 seconds. Write a statement that assigns to pressure the 
//  result of 4 / 2 * 4, clarified with parentheses, producing 8. 
//  The variable hasn't been declared beforehand.

//  Answer:
//  var pressure = (4 / 2) * 4;

//  17. Time goal: 50 seconds. Write a statement that assigns to a variable the 
//  result of adding two variables together and then afterward multiplying the result 
//  of the addition by another variable. The first variable has been declared beforehand.

//  Answer:
//  result = (varOne + varTwo) * varThree;

//  18. Time goal: 60 seconds. Write a statement that assigns to a variable the 
//  result of 4 / 2 * 4 - 1, clarified with parentheses, producing -.5. 
//  The variable hasn't been declared beforehand.

//  Answer:
//  var result = 4 / (2 * 4) - 1;

//  19. Live coding exercise:
//  - Assign to a variable the result of a math expression that requires a set of parentheses.
//  - Display an alert, specifying the variable as the message.
//  - Click the Run It button to run your code live.
//  - Type out the code. If you copy and paste it from the screen showing the correct code, it may not work.

//  Answer:
//  var result = (2 + 2) * 4;
//  alert(result);

//  20. Live coding exercise:
//  Assign numbers to three variables.
//  Display an alert, specifying as the message a math expression of your choosing that uses the three variables and requires parentheses. The alert will display the result of the calculation.
//  Click the Run It button to run your code live.
//  Type out the code. If you copy and paste it from the screen showing the correct code, it may not work.

//  Answer:
//  var numOne = 2;
//  var numTwo = 4;
//  var numThree = 6;
//  alert((numOne * numTwo) + numThree);