function shopping(input){

    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let GPUFinalPrice = GPU * 250;
    let CPUPrice = GPUFinalPrice * 0.35;
    let RAMPrice = GPUFinalPrice * 0.10;

    let CPUFinalPrice = CPU * CPUPrice;
    let RAMFinalPrice = RAM * RAMPrice;

    let total = GPUFinalPrice + CPUFinalPrice + RAMFinalPrice;

    if(GPU > CPU){
        total = total - (total*0.15);
    }
    if(total <= budget){
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45",

"3",

"1",

"1"])