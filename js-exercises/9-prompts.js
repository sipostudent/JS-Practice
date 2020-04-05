//  Chapter - Prompts
//  =================

//  1. What is the keyword that displays a box requesting user input?

//  Answer:
//  prompt

//  2. What is the keyword in a statement that shares most of the syntax of a prompt statement?

//  Answer:
//  alert

//  3. What do you need in order to capture a user's input in a prompt box? Answer with one word.

//  Answer:
//  variable

//  4. var gender = prompt(askGender, bestGuess);
//  In the above statement, what is optional?

//  Answer:
//  bestGuess

//  5. Drag-and-drop. Holding down the left mouse button, drag the pieces to create a statement 
//  that creates a prompt asking "Your planet?" and assigning the user's response to home.

//  Answer:
//  var home = prompt("Your planet?", "Mars");

//  6. Click in the box and type the next character. I'll autocomplete. Don't type spaces.
//  Code a prompt with the message "Enter first name". The user's response is assigned to 
//  firstName, which hasn't been declared beforehand.

//  Answer:
//  var firstName = prompt ("Enter first name");

//  7. Fail-safe coding. If you type the wrong character, I'll cancel the keystroke. Type spaces.
//  Code a prompt with the message "Country?" and the default answer "China". 
//  The user's response is assigned to country, which hasn't been declared beforehand.

//  Answer:
//  var country = prompt("country?", "China");

//  8. Code a prompt that specifies a string as the message. Assign the user's response to a 
//  variable that hasn't been declared beforehand.

//  Answer:
//  var yourName = prompt("What is your name?");

//  9. Code a prompt that specifies a string as the message. Include a default input. 
//  Assign the user's response to a variable that hasn't been declared beforehand.

//  Answer:
//  var yourName = prompt("What is your name?", "Cat got your tongue?");

//  10. Code a prompt that specifies a variable as the message and assigns the user's 
//  response to a variable that hasn't been declared beforehand.

//  Answer:
//  var name = prompt(yourName);

//  11. Code a prompt that specifies a variable as the message, a second variable as 
//  the default response, and assigns the user's response to a third variable that hasn't 
//  been declared beforehand.

//  Answer:
//  var name = prompt(yourName, nameUnknown);

//  12. Assign strings to two variables. Code a prompt specifying the first variable as 
//  the message and the second variable as the default response. Assign the user's response 
//  to a third variable. None of the variables have been declared beforehand.

//  Answer:
//  var question = "What is your name?";
//  var defaultAnswer = "Your name is a requirement";
//  var detailsRequired = prompt(question, defaultAnswer);

//  13. Time goal: 30 seconds. (The timer starts when you click in the answer field.)
//  var sex = prompt(askGender, bestGuess);
//  Re-code the statement above, omitting what's optional.

//  Answer:
//  var sex = prompt(askGender);

//  14. Time goal: 40 seconds. Code a prompt that specifies a string as the message. 
//  Assign the user's response to a variable that hasn't been declared beforehand.

//  Answer:
//  var yourName =  prompt("What is your name?");

//  15. Time goal: 45 seconds. Code a prompt that specifies a string as the message. 
//  Include a default input. Assign the user's response to a variable that hasn't been 
//  declared beforehand.

//  Answer:
//  var yourName = prompt("What is your name?", "Your name is a requirement, please respond");

//  16. Time goal: 30 seconds. Code a prompt that specifies a variable as the message 
//  and assigns the user's response to a variable that hasn't been declared beforehand.

//  Answer:
//  var yourName = prompt(name);

//  17. Time goal: 45 seconds. Code a prompt that specifies a variable as the message, 
//  a second variable as the default response, and assigns the user's response to a third 
//  variable that hasn't been declared beforehand.

//  Answer:
//  var yourName = prompt(name, nameRequired);

//  18. Time goal: 70 seconds. Assign strings to two variables. Code a prompt specifying 
//  the first variable as the message and the second variable as the default response. 
//  Assign the user's response to a third variable. None of the variables have been declared 
//  beforehand.

//  Answer:
//  var question = "What is your name?";
//  var defaultAnswer = "Name is required";
//  var yourName = prompt(question, defaultAnswer);

//  19. Live coding exercise:
//  - Display a prompt, including both a message and a default response.
//  - Display the user's response in an alert.
//  - Click the Run It button to run your code live.
//  - Type out the code. If you copy and paste it from the screen showing the correct code, it may not work.

//  Answer:
//  var yourName = prompt("What is your name?", "Name required");
//  alert(youName);


//  20. Live coding exercise:
//  In a single statement...
//  - Code an alert that displays...
//  - ...the concatenation of a response to a prompt plus a string.
//  - Click the Run It button to run your code live.
//  - Type out the code. If you copy and paste it from the screen showing the correct code, it may not work.

//  Answer:
//  alert(prompt("What is your name?") + " is your name.");