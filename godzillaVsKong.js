function godzillaVsKong(input){
    
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let singleClothingPrice = Number(input[2]);

    let decor = budget * 0.10;
    let totalPriceForClothing = extras * singleClothingPrice;

    if(extras > 150){
        totalPriceForClothing *= 0.90;
    }

    let totalMoney = decor + totalPriceForClothing;

    if(budget >= totalMoney){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalMoney).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoney - budget).toFixed(2)} leva more.`)
    }

}
godzillaVsKong(["9587.88",

"222",

"55.68"])