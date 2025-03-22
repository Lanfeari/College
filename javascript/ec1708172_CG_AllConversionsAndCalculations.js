// alternatively to these multi line functions we could have alert the calculation without forst setting it
const area = function area() {
    //Getting and setting the length and widith from user
    let len = parseInt(prompt('What is the length of the room?'));
    let wid = parseInt(prompt('What is the widith of the room?'));
    //performing the calculation
    let area = len * wid;
    //alert( the value of area
    alert(area); // the units will be handled on the other end
};

const price = function price() {
    //getting and setting the item price and quanitity.
    //we do not have a dictionary to check against so we are trust user for everything here
    let p = parseInt(prompt('What is the price?'));
    let q = parseInt(prompt('How many?'));
    //the calculation
    let t = p * q;
    //alert(
    alert(t);
};

const exchange = function exchange(amount, rate) {
    //getting and setting rate and amount
    let amount = parseInt(prompt('How many euros do you want to change? '));
    let rate = parseInt(prompt('And the current eur to usd rate? '));
    //perform calculation
    let change = amount * rate;
    //alert(ing
    alert(change);
};

const cubed = function cubed() {
    //getting and setting the number user wants
    let x = parseInt(prompt('What number do you want to cube?'));
    //perform calculation
    let y = x ** 3;
    //alert(ing 
    alert(y);
};

const kiloToLbs = function kiloToLbs() {
    //getting and setting the kilos to convert
    let x = parseInt(prompt('Weight in kilos? '));
    let y = x * 2.2;
    //alert( the converted value
    alert( y;
};

const lbsToKilos = function lbsToKilos() {
    //getting and setting given lbs
    let x = parseInt(prompt('How many pounds do you want to convert? '));
    //calculation
    let y = x / 2.2;
    //alert(ing 
    alert( y;
};

const meterToInch = function meterToInch() {
    //getting and setting the meters
    let x = parseInt(prompt('Meters to convert? '));
    //perform the calcualtion
    let y = x * 39.3;
    //alert(ing 
    alert( y;
};

const inchToMeter = function inchToMeter() {
    //getting and setting the inches
    let x = parseInt(prompt('Inches to convert? '));
    //perform the calculation
    let y = x / 39.3;
    //alert(ing 
    alert( y;
};

const mileToKilo = function mileToKilo(){
    //getting and setting user input
    let x = parseInt(prompt('Miles to convert? '));
    //calculation
    let y = x * 1.6;
    //alert(ing
    alert( y;
};

const kiloToMile = function kiloToMile(){
    //getting and setting user input
    let x = parseInt(prompt('Kilometers to convert? '))
    //calculation 
    let y = x / 1.6;
    //alert(ing
    alert( y;
};

const celToFah = function celToFah(){
    //getting and setting celsius
    let x = parseInt(prompt('Temprature is celsius?'))
    //calculation
    let y = x * (9/5) + 32;
    alert( y;
};

const fahToCel = function fahToCel(){
    //getting and setting fah
    let x = parseInt(prompt('what is temp in fahrenheit? '));
    //calc
    let y = x - 32 * (5/9);
    // alert( y
    alert( y;
}

const budget1 = function budget1(){
    let x =  parseInt(prompt('What is your budget?'))
    let y = parseInt(prompt('How much is a single item?'))
    if (y/x < 0){
        alert('You can\'t get any')
    }
    else{
        z = Math.round(y/x)
        alert('You can get' + z + 'items withs that much!')
    }
}



const budget2 = function budget2(){
    let x =  parseInt(prompt('What is your budget?'))
    let y = parseInt(prompt('How much is a single item?'))
    if (y/x < 0){
        alert('You can\'t get any')
    }
    else{
        let z = x/y
        let t = z*y - x
        alert('You can buy ' + z + ' With that budget ' + 'You will have ' + t + ' left over')
    }
}
//This one was intresting. challanged myself by trying to use fewer lines of code but didnt do to well on that
//The added pPp charge would be a engaging challange if the dvd amount was dynamic 
DVD = function dvd(){
    let [x, y , z] = ['', '', ''];
    let [x2, y2, z2] = [0, 0, 0];
    let [x3, y3, z3] = [0,0, 0];
    let [tx, ty, tz, tTotal] = [0, 0, 0, 0]
    while ( !x && !x2 && !x3 ) [x , x2, x3] = [prompt('Enter dvd title'), prompt('price? '), prompt('How many?')];
    while ( !y && !y2 && !y3 ) [y , y2, y3] = [prompt('Enter second title'), prompt('Price? '), prompt('How many?')];
    while ( !z && !z2 && !z3 ) [z , z2, z3] = [prompt('Enter third title'), prompt('Price? '), prompt('How many?')];
    tx = x2*x3
    ty = y2*y3
    tz = z2*z3
    tTotal = tx + ty +tz
    let tTotalVat = tTotal * 0.2
    tTotal = tTotal + tTotalVat
    tTotal = tTotal + 4
    alert(tTotal)


};