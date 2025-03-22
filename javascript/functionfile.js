/*
Ask player to enter their score (in gameplay), then how many lives they have left, then what level they reached.
- Write the calculation and assign to one variable. Display final variable to player showing his total score.
Then show the player his ranking based on his total score (make your own messages).
1000+ = ‘excellent’
750 – 999 = ‘flying high’
500 – 749 = ‘a good effort’
250 – 499 = ‘what happened?’
0 – 249 = ‘have you even seen a computer before!?

*/

function main(){

    let lives = prompt("Enter the lives you had remaining");
    let livesScore = lives ** 10
    let level = prompt("Enter the level you reached");
    let levelScore = level ** 100
    let gameplayScore = prompt("Enter your gameplay score");
    let totalScore = gameplayScore + livesScore + levelScore

    while (isNaN(lives) || isNaN(level)  || isNaN(gameplayScore)) {
        alert("not a valid input");

        userInputExamMark = prompt("Enter your exam mark");

        if (isNaN(lives) || isNaN(lives) || isNaN(lives)) {
            alert('Invalid input')
            exit
        }
        totalscore = parseFloat(totalScore)
    }
    if (totalScore > 1000) {
        alert('You are an expert - excellent')
    }
    else if (totalScore > 750 && totalScore < 1000) {
        alert('You are a good player - flying high')
    }
    else if (totalScore > 500 && totalScore < 750) {
        alert('You are a good player - a good effort')
    }
    else if (totalScore > 250 && totalScore < 500) {
        alert('You are a good player - what happened?')
    }
    else if (totalScore < 250) {
        alert('have you even seen a computer before!')
    }
    else{
        alert('there has been a mistake')
        exit
    }

}