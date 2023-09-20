function petShop(input){
    let dog = Number(input[0]);
    let cat = Number(input[1]);
    let price = dog * 2.5 + cat * 4;
    console.log(`${price} lv.`);
}
petShop([2, 3])