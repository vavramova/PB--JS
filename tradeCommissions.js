function tradeCommissions(input){
//Град   0 ≤ s ≤ 500    500 < s ≤ 1 000     1 000 < s ≤ 10 000     s > 10 000
//Sofia     5%                7%                    8%                12%
//Varna    4.5%              7.5%                  10%                13%
//Plovdiv  5.5%               8%                   12%               14.5%

    let town = input[0];
    let s = Number(input[1]);
    let price = 0;

    if(town === "Sofia"){
        if(s >= 0 && s <= 500){
            console.log((price = s * 0.05).toFixed(2));
        }else if(s > 500 && s <= 1000){
            console.log((price = s * 0.07).toFixed(2));
        }else if(s > 1000 && s <= 10000){
            console.log((price = s * 0.08).toFixed(2));
        }else if(s > 10000){
            console.log((price = s * 0.12).toFixed(2));
        }else{
            console.log("error");
        }
    }else if(town === "Varna"){
        if(s >= 0 && s <= 500){
            console.log((price = s * 0.045).toFixed(2));
        }else if(s > 500 && s <= 1000){
            console.log((price = s * 0.075).toFixed(2));
        }else if(s > 1000 && s <= 10000){
            console.log((price = s * 0.10).toFixed(2));
        }else if(s > 10000){
            console.log((price = s * 0.13).toFixed(2));
        }else{
            console.log("error");
    }
}else if(town === "Plovdiv"){
    if(s >= 0 && s <= 500){
        console.log((price = s * 0.055).toFixed(2));
    }else if(s > 500 && s <= 1000){
        console.log((price = s * 0.08).toFixed(2));
    }else if(s > 1000 && s <= 10000){
        console.log((price = s * 0.12).toFixed(2));
    }else if(s > 10000){
        console.log((price = s * 0.145).toFixed(2));
    }else{
        console.log("error");
    }
}else{
    console.log("error");
}
}
tradeCommissions(["Kaspichan", "-50"])