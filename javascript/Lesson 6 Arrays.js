const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3])
// looking at arrays and acessing memory beyond the bounds of an array. accessing arrays etc
// strings can be accessed like arrays on indvidual characters.

// changing indivudal indexes within an array

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments)
utensils[3] = 'Spoon'
console.log(utensils)

// we can change the items in an array constant remain mutuable but the array it's self cannot be reassigned. 

// we can gather the length property of an the jsArray by using the .length method. thsi functions like a string but
// will give us the amount of items within the jsArray.

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

// next we look at calling teh .push method onto our arrays. .push() is destructive as it changes the intial jsArray

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('Item 4', 'item 5')
console.log(chores)


// next we look at a few other methods we can use with jsArrays.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)
console.log(groceryList.slice(1,4))
console.log(groceryList)
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)

// changes to java script arrays are mainted outside of the code blocks they are performed in.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement(newArr){
newArr.pop()
}
removeElement(concept)
console.log(concept)


// nested arrays and accessing, nested arrays.

let numberClusters = [[1,2],[3,4],[5,6]]
console.log(numberClusters)
const target = numberClusters[2][1];
console.log(target)

