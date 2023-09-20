function greening(input){
    let a = Number(input[0]);
    let p = a * 7.61;
    let discount = p * 0.18;
    let fp = p - discount;
    console.log(`The final price is: ${fp} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greening([550])