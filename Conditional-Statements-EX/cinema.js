function cinema(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;

    switch(type){
        case "Premiere": console.log(`${(income = r * c * 12.00).toFixed(2)} leva`); break;
        case "Normal": console.log(`${(income = r * c * 7.50).toFixed(2)} leva`); break;
        case "Discount": console.log(`${(income = r* c * 5.00).toFixed(2)} leva`); break;
    }
}
cinema(["Premiere",
"10",
"12"])
