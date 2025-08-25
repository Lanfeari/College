let sale = true
//setting sale to boolean true
// if we then declare sale = false here the statement below will not run.
if (sale){
  console.log('Time to buy!')
}
//if sale = true print Time to buy!

let sale1 = true;
sale1 = false;
//We are reversing the logic here, if false else true.
if(sale1) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.')
}


let hungerLevel = 7
//setting hungerLevel to 7
if(hungerLevel > 7) {
  console.log('Time to eat!')
}
else {
  console.log('We can eat later!')
}
//we are then providing two conditions. Hungerlevel is 7 and
// not greater than 7 so we evaluate false and the latter statement runs.

// next we will be looking at logical operators.
// there are 3 logical operators in JS
// and they are &&, ||, and !.
// && is the and operator, || is the or operator and ! is the not operator.
// the && operator checks if both sides of the and operator are true.
// the || operator checks if either side of the or operator is true.
// the ! operator checks if the value is false.

let mood = 'sleepy';
let tirednessLevel = 6;
// we are creating a if statement using the && operator
if(mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
}
else {
  console.log('not bed time yet')
}

// moving on from that we are looking at truthy and falsy values.
// in JS all values have an inherent truthy or falsy boolean value.
// values that are considered falsy are:
// 0, empty strings, null, undefined, NaN, false.
// all other values are considered truthy.
// when we use an if statement, JS will evaluate the condition inside the parentheses to true or false.

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//here we pass an empty string witch evaluates to falsey and the else statement runs.

// we can do short circuit programming by using the || operator.
// this operator will return the value of the first truthy value it finds.
// if the first value is truthy it will return that value.
// if the first value is falsy it will return the second value.
// if the first value is truthy it will not evaluate the second value.
// this is useful for providing default values to variables.
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
// here we are using the || operator to check if the first value is truthy.
// if it is it will return that value, if it is not it will return the second value.

//now the ternary operator.
// the ternary operator is a shorthand version of an if else statement.
// it is often used to assign a value to a variable based on a condition.
// it takes three arguments.
// the first argument is the condition.
// the second argument is the code to run if the condition is true.
// the third argument is the code to run if the condition is false.
// the syntax is condition ? expressionIfTrue : expressionIfFalse;

let isLocked = false;

 isLocked ? console.log('You will need a key to open the door.'):
            console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!'):
            console.log('Incorrect!');


let favoritePhrase1 = 'Love That!';

favoritePhrase1 === 'Love That!' ? console.log('I love that!'):
                                   console.log("I don't love that!");
// next else if statements.

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
// here we use something called an escape charcter we declare this with \ followed by the character.
else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
}
else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
}
else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}

else {
  console.log('Invalid season.');
}

// we can also use switch statements.
// switch statements are another way to conditionally execute code.
// they are often used when there are multiple conditions to evaluate.
// the switch keyword initiates the statement and is followed by ( ... ).
// inside the parentheses is an expression. this expression is compared to the case labels.
// case is like an else if statement.
// when the expression matches a case the code inside that case will execute.
// the break keyword tells JS to exit the block and not execute any more code.
// if the break keyword is omitted the code will continue to execute until a break is encountered.
// the default keyword specifies code to run if there is no case match.
// the default keyword is optional and can be omitted.

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
  console.log('You get the gold medal!')
  break;
  case 'second place':
  console.log('You get the silver medal!')
  break;
  case 'third place':
  console.log('You get the bronze medal!')
  break;
  default: 
  console.log('No medal awarded.')
  break;
}

