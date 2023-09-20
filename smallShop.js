function smallShop(input){
    //град / продукт coffee   water   beer   sweets   peanuts
//Sofia               0.50    0.80    1.20    1.45     1.60
//Plovdiv             0.40    0.70    1.15    1.30     1.50
//Varna               0.45    0.70    1.10    1.35     1.55

   let product = input[0];
   let town = input[1];
   let quantity = input[2];
   let price = 0;

   if(town === "Sofia"){
    switch(product){
        case "coffee": console.log(price = quantity * 0.50); break;
        case "water": console.log(price = quantity * 0.80); break;
        case "beer": console.log(price = quantity * 1.20); break;
        case "sweets": console.log(price = quantity * 1.45); break;
        default: console.log(price = quantity * 1.60); break; 
       }
   }else if(town === "Plovdiv"){
    switch(product){
        case "coffee": console.log(price = quantity * 0.40); break;
        case "water": console.log(price = quantity * 0.70); break;
        case "beer": console.log(price = quantity * 1.15); break;
        case "sweets": console.log(price = quantity * 1.30); break;
        default: console.log(price = quantity * 1.50); break; 
   }
}else{
    switch(product){
        case "coffee": console.log(price = quantity * 0.45); break;
        case "water": console.log(price = quantity * 0.70); break;
        case "beer": console.log(price = quantity * 1.10); break;
        case "sweets": console.log(price = quantity * 1.35); break;
        default: console.log(price = quantity * 1.55); break; 
    }
}
}
smallShop(["beer", "Sofia", "2"])