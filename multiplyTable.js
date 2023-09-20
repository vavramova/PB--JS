function multiplyTable(input){
    let num = Number(input[0]);
    
    let numAsString = String(num)
    let digit1 = Number(numAsString[2]);
    let digit2 = Number(numAsString[1]);
    let digit3 = Number(numAsString[0]);

    for(x = 1; x <= digit1; x++){
        for(y = 1; y <= digit2; y++){
            for(z = 1; z <= digit3; z++){
                let sum = x * y * z;
                console.log(`${x} * ${y} * ${z} = ${sum}`)
            }
        }
    }
}
multiplyTable(["342"])