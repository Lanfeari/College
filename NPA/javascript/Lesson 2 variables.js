// Var is used in Java script to declare a varaible, we couple with with IDing the variable and then assinging a value to it
var Favorite_Food = 'Pizza';
// We can assign a varibles value to be almost anything, a boolean, a string, a number, an array, an object, a function, etc.
var Num_Slices = 8; // Number
// we can then pass these variables to functions, this allows us to have dynmaic values and to tidy up code.
console.log(Favorite_Food);
console.log(Num_Slices);
// We can also change the value of a variable, this is called reassigning.
Favorite_Food = 'Pasta';
console.log(Favorite_Food);

// When we declare a varibale without assigning a value the value is undefined.
var Drink;
console.log(Drink);
// We can also assign a variable to be null, this is used to represent a variable that has no value.

// We can declare a varible with let and const, let is used to declare a variable that can be reassigned, const is used to declare a variable that cannot be reassigned.
let changeMe = true;
console.log(changeMe);
changeMe = false;
console.log(changeMe);
// Here we have changed the declared varaiable from True to False.
//and then outputted it to check our work.

// Next we look at the const variable, const cannot be reassigned.
const entree = 'Enchiladas';
console.log(entree);
// If we try to reassign a const variable we will get an error.
// entree = 'Tacos';
// console.log(entree);
//we can use the `+=` operator to concatenate a string onto the end of another string variable.

// also to preform math and assignment in one step.
let n1 = 1;
n1 += 2;
console.log(n1);
//this should add 2 to the value of n1 then assign it and then log the result.

// we can use the `++` operator to increment a number by 1.
let n2 = 1;
n2++;
console.log(n2);
// Note we cannot pass a value to increment eg ++1 as this returns an error

// We can use the `--` operator to decrement a number by 1.
let n3 = 1;
n3--;
console.log(n3);

// We can use the + operator to concatenate two strings together.
var favAnimal = 'Dog';
console.log('My favorite animal: ' + favAnimal);
// This will add the string 'My favorite animal: ' to the string stored in the variable favAnimal and then log the result.

// We can use interpolate strings by using the backtick ` and then using ${} to insert a variable into the string.
var myName = 'John';
var myCity = 'London';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
// This will log the string My name is John. My favorite city is London. to the console.

// We can use the `typeof` operator to check the data type of a variable.
let newVar = 'Hello';
console.log(typeof newVar);
// This will log the string 'string' to the console.
let newVar2 = 1;
console.log(typeof newVar2);
// This will log the string 'number' to the console.
let newVar3 = true;
console.log(typeof newVar3);
// This will log the string 'boolean' to the console.

