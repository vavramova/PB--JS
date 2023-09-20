function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let price = 0;

    if(season === "Spring"){
        price = 3000;
    }else if(season === "Summer" || season === "Autumn"){
        price = 4200;
    }else{
        price = 2600;
    }

    if(fishermans <= 6){
        price = price * 0.90;
    }else if(fishermans > 6 && fishermans <= 11){
        price = price * 0.85;
    }else if(fishermans > 11){
        price = price * 0.75;
    }

    if(fishermans % 2 === 0 && season !== "Autumn"){
       price = price * 0.95;
    }
     
    let diff = Math.abs(budget - price);
    if(budget >= price){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000",
"Winter",
"13"])

