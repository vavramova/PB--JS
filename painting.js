function painting(input){
    let nylon = (input[0]+2) * 1.5;
    let paint = (input[1] + (input[1]*0.10)) * 14.5;
    let thinner = input[2] * 5;
    let materials = nylon + paint + thinner + 0.40;
    let builders = (materials * 0.30) * input[3];
    let all = materials + builders;

    console.log(all);
}

painting([10, 11, 4, 8])