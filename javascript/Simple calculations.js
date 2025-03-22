function addition(){
    //setting my var's to 0, although i do not know why the document i read said it was good practice
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    //using the parseInt method here so the return value is an Integer that the "+" operator can work with
    n1 = parseInt(prompt('Enter the first number? ',0)); // passing 0 as a paramter here means that the value "0" will already be present in the pop-up box
    n2 = parseInt(prompt('Enter the second number> ',0)); // asking for the second value
    n3 = n1 + n2; // preforming the calculation
    alert(n3)     // This is the output
}

function subtraction(){
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    //we do not need to "parseInt" here because the "-" is not multifuction like "+"
    n1 = prompt('Enter the first number? ',0);
    n2 = prompt('Enter the secodn number? ',0);
    n3 = n1 - n2;
    alert(n3);
}

function division(){
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    // entering 1 as the defualt vlaue for division because dividing by 0 is never a great idea.
    n1 = prompt('Enter the numerator? ',1);
    n2 = prompt('Enter the denominator? ',1);
    n3 = n1 / n2;
    alert(n3);

}

function multipilcation(){
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    // entering 1 as the defualt vlaue for division because dividing by 0 is never a great idea.
    n1 = prompt('Enter the first number ',0);
    n2 = prompt('Enter the denominator? ',0);
    n3 = n1 * n2;
    alert(n3);
}