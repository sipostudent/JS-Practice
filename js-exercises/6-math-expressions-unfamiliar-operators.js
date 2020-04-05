//  Chapter 6 - Math expressions: Unfamiliar operators
//  ==================================================

/**
 *  There's a concept in this lesson that creates a stumbling block for some people. I've rewritten the chapter in the book, hoping to make it clearer. In essence, this is what the revised chapter says:

    Writing var y = x++ with the plus signs after x, says, "Increment x after the value of x is assigned to y." So y gets the original value of x, and then x is bumped up to x + 1.

    step 1: y = x assign the value of x to y
    step 2: ++ increment x

    Writing var y = ++x with the plus sign before x, says, "Increment x before assigning its value to y." So both variables wind up with the bumped-up value of x.

    step 1: ++x increment x
    step 2: y = x assign the new value of x to y
    I hope this helps.

    For a little more help, here's a video.
    https://vimeo.com/106125072
 */

//  1. Code the short form of x = x + 1;
//  Answer:
//  x = x++;

//  2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
//  Answer:
//  x = x--;

//  3. var x = 50;
//  var y = x++;
//  What is the value of y?
//  Answer:
//  50

//  4. var x = 50;
//  var y = --x;
//  What is the value of y?
//  Answer:
//  49

//  5. Drag-and-drop. Holding down the left mouse button, drag the pieces of code onto the screen 
//  to form a statement that assigns the original value of num to newNum and then increments num.
//  Answer:
//  var newNum = num++;

//  6. Click in the box and type teh next character. I'll autocomplete. Don't type spaces.
//  In a single statement, increment the variable num and assign its new value to a second
//  variable, newNum, which hasn't been declared beforehand.
//  Answer:
//  var newNum = ++num;

//  7. Fail-safe coding. If you type the wrong character, I'll cancel the keystroke. Type spaces.
//  In a single statement, decrement num and assign its original value to newNum, which hasn't been 
//  declared beforehand.
//  Answer:
//  var newNum = num--;

//  8. Using minimal code, decrement x.
//  Answer:
//  x--;

//  9. What is the long version of x++?
//  Answer:
//  x = x + x;

//  10. In a single statement subtract 1 from a variable and assign the new value to another 
//  variable, which hasn't been declared beforehand.
//  Answer:
//  var num = --newNum;

//  11. In a single statement add 1 to a variable and assign its original value to another 
//  variable, which hasn't been declared beforehand.
//  Answer:
//  var newNum = num++;

//  12. Increment a variable. In a second statement, display its new value in an alert.
//  Answer:
//  num++;
//  alert(num);

//  13. Time goal: 15 seconds. (The timer starts when you click in the answer field.) 
//  Code the short form of x = x + 1;
//  Answer:
//  x = x++;

//  14. Time goal: 15 seconds. Using minimal code, decrement x.
//  Answer:
//  --x;

//  15. Time goal: 20 seconds. What is the long version of x++?
//  Answer:
//  x = x + 1;

//  16. Time goal: 25 seconds. In a single statement subtract 1 from a variable and 
//  assign the new value to another variable, which hasn't been declared beforehand.
//  Answer:
//  var num = --newNum;

//  17. Time goal: 25 seconds. In a single statement add 1 to a variable and assign 
//  its original value to another variable, which hasn't been declared beforehand.
//  Answer:
//  var newNum = num++;

//  18. Time goal: 25 seconds. Increment a variable, then display its new value in an alert.
//  Answer:
//  num++;
//  alert(num);

//  19. Live coding exercise:
//  - Assign a number value to a variable.
//  - Increment the variable using minimal code.
//  - Display the new value in an alert.
//  - Click the Run It button to run your code live.
//  Answer:
//  var num = 1;
//  num++;
//  alert(num);

//  20. Live coding exercise:
//  - Assign a number value to a variable.
//  - Increment the variable using minimal code while assigning its incremented value to a second variable.
//  - Display the value of the second variable in an alert.
//  - Click the Run It button to run your code live.
//  Answer:
//  var num = 4;
//  var newNum = ++num;
//  alert(newNum);