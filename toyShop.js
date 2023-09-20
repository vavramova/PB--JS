function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears =  Number(input[3]);
    let minions = Number(input[4]);
    let truck =  Number(input[5]);

    let puzzlePrice = puzzle * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let truckPrice = truck * 2;

    let totalToysPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + truckPrice;
    let totalToysCount = puzzle + dolls + bears + minions + truck;

    if(totalToysCount >= 50){
        totalToysPrice = totalToysPrice * 0.75;
    }

    totalToysPrice = totalToysPrice * 0.90;

    if(totalToysPrice >= tripPrice){
        console.log(`Yes! ${(totalToysPrice - tripPrice).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${(tripPrice - totalToysPrice).toFixed(2)} lv needed.`)
    }

}
toyShop(["320", "8", "2", "5", "5", "1"])