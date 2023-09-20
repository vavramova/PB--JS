function aquarium(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let v = a * b * c;
    let vInL = v * 0.001;
    let space = Number(input[3]) * 0.01;
    let needed = vInL * (1 - space);

    console.log(needed);
}
aquarium([85, 75, 47, 17])