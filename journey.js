function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
   
    if(budget <= 100) {
        console.log("Somewhere in Bulgaria");
        if(season === "summer"){
            let price = budget * 0.30;
            console.log(`Camp - ${price.toFixed(2)}`);
        }else {
            let price = budget * 0.70;
            console.log(`Hotel - ${price.toFixed(2)}`);
        }
    }else if (budget <= 1000){
        console.log("Somewhere in Balkans");
        if(season === "summer"){
            let price = budget * 0.40;
            console.log(`Camp - ${price.toFixed(2)}`);
        }else {
            let price = budget * 0.80;
            console.log(`Hotel - ${price.toFixed(2)}`);
        }
    }else{
        console.log("Somewhere in Europe");
        let price = budget * 0.90;
        console.log(`Hotel - ${price.toFixed(2)}`);
    }
}
journey(["60", "summer"])