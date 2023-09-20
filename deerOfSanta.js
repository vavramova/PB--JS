function deerOfSanta(input){
    let daysGone = Number(input[0]);
    let foodLeft = Number(input[1]);
    let foodDeer1 = Number(input[2]);
    let foodDeer2 = Number(input[3]);
    let foodDeer3 = Number(input[4]);

    let neededFood1 = daysGone * foodDeer1;
    let neededFood2 = daysGone * foodDeer2;
    let neededFood3 = daysGone * foodDeer3;
    let allFoodNeeded =  neededFood1 + neededFood2 + neededFood3;

    if(foodLeft >= allFoodNeeded) {
        let kg = foodLeft - allFoodNeeded;
        console.log(`${Math.floor(kg)} kilos of food left.`)
    }else {
        let kg1 = allFoodNeeded - foodLeft;
        console.log(`${Math.ceil(kg1)} more kilos of food are needed.`);
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
