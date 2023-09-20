function foodDelivery(input){
    let chicken = input[0] * 10.35;
    let fish = input[1] * 12.4;
    let veg = input[2] * 8.15; 
    let desert = (chicken + fish + veg)*0.20;
    
    let total = chicken + fish + veg + desert + 2.5;

    console.log(total);
}
foodDelivery([2, 4, 3])