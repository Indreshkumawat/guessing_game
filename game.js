let number=parseInt(prompt('Enter a number:'));
while(!number)
{
    number=number=parseInt(prompt('Enter a valid number:'));
}
let targetNum=Math.floor(Math.random()*number)+1;
let guess=prompt('enter your 1st guess (or enter q to )');
let attempt=1;
while(parseInt(guess)!==targetNum)
{
    if(guess==='q')
    break;
    guess=parseInt(guess);
    if(guess>targetNum)
    {
        guess=prompt('Too high!!Try something low..');
        attempt++;
    }
    else if(guess<targetNum)
    {
        guess=prompt('low!!Try something high..')
        attempt++;
    }
    else{
        guess=prompt('Invalid guess!! Please enter valid guess or q to Quit..');
    }
}
if(guess=='q')
console.log("Ok! you quit the game..");
else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempt} guesses`)
}