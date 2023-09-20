function lunchBreak(input){

    let seriesName = input[0];
    let episodeLenght = Number(input[1]);
    let breakLenght = Number(input[2]);

    let timeForLunch = 1/8 * breakLenght;
    let timeForRest = 1/4 * breakLenght;

    let timeLeft = breakLenght - (timeForLunch + timeForRest);

    if(episodeLenght > timeLeft){
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLenght - timeLeft)} more minutes.`)
    }else{
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeLenght)} minutes free time.`)
    }
}
lunchBreak(["Game of Thrones",

"60",

"96"])