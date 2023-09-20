function basketball(input){
    let annual = Number(input[0]);
    let sneakers = input[0] - (input[0]*0.4);
    let clothing = sneakers - (sneakers * 0.2);
    let ball = 1/4 * clothing;
    let accessoriess = 1/5 * ball;
    let total = annual + sneakers + clothing + ball + accessoriess;

    console.log(total);
}
basketball([365])