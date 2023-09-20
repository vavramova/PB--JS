function school(input){
    let pensils = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let chemicals = Number(input[2]) * 1.2;
    let discount = Number(input[3]) * 0.01;
    let final = (pensils + markers + chemicals);
    let total = final - (final * discount);
     
    console.log(total);
}

school([2, 3, 4, 25])