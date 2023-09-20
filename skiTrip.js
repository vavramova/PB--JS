function skiTrip(input){
//вид помещение           *по-малко от 10 дни*       *между 10 и 15 дни*          * повече от 15 дни

//room for one person 18     не ползва намаление      не ползва намаление              не ползва намаление

//apartment  25              30% от крайната           цена 35% от крайната цена      50% от крайната цена

//president apartment  35    10% от крайната           цена 15% от крайната цена      20% от крайната цена

    let days = Number(input[0]);
    let type = input[1];
    let rate = input[2];
    let nights = days - 1;
    let price = 0;

    if(type === "room for one person"){
        if(days < 10){
            price = 18;
        }else if(days >= 10 && days <= 15) {
            price = 18;
        }else {
            price = 18;
        }
    }else if(type === "apartment") {
        price = 25;
        if(days < 10){
            price *= 0.70;
        }else if(days >= 10 && days <= 15) {
            price *= 0.65;
        } else {
            price *= 0.50;
        }
    }else{
        price = 35;
        if(days < 10){
            price *= 0.90;
        }else if(days >= 10 && days <= 15){
            price *= 0.85;
        }else{
            price *= 0.80;
        }
    }
     let finalPrice = price * nights;

    if(rate === "positive"){
      finalPrice += finalPrice*= 0.25;
    }else{
        finalPrice -= finalPrice * 0.10;
    }
    console.log(finalPrice.toFixed(2));
    }
    
skiTrip(["12", "room for one person", "positive"])