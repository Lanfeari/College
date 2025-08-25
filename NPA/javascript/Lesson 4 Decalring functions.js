// the atonmy of decalring a function is.
// declaration, identifier, code block.
// function declaration
function myFunction() {
    // code block
    return "Hello World!";
}   // end of function

//JavaScript has a hoisting function witch allows us to acess the function before it is declared.
// this is how it works
console.log(myFunction1());
function myFunction1() {
    return "Hello World!";
}
// this will work because of hoisting.

// below we will show a simple example of defining a function.
function getReminder(){
    console.log('Water the plants.')
  }
  
  function greetInSpanish(){
    console.log('Buenas tardes.')
  }

  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  //calling 
  sayThanks()
  sayThanks()
  sayThanks()
  
//We can pass positional arguments into our defined functions, these arguments are passed in the order they are defined in the function.
// below is an example of passing arguments into a function.
function sayThanks1(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.'
    );
  }
  sayThanks('Cole')
  
//Next we are looking at default parameters, these are parameters that are set to a default value if no value is passed in.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

// looking at passing positional arguments to functions for use within them.

function monitorCount(rows, columns){
  return rows * columns
}
const numOfMonitors = monitorCount(5,4)
console.log(numOfMonitors)

// next we look at using functions within functions

function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows,columns){
  return monitorCount(rows, columns) * 200
}
const totalCost = costOfMonitors(5,4)
console.log(totalCost)

// looking at functions passed in varibles

const plantNeedsWater = function(day,plantNeedsWater){
  if (day === 'Wednesday')
    return true
  else 
    return false
  }
  plantNeedsWater('Tuesday')
  console.log(plantNeedsWater('Tuesday'));
  
// we can also write anonomousy function like this

const plantNeedsWater1 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// looking at more ways to use teh fat arrow syntax

const plantNeedsWater2 = day => 
  day === 'Wednesday' ? true : false;
  // this is Implicit return and uses the ternary operators instead of if/else block
  // since the function is a single line we can reformat it in this way.




