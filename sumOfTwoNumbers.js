function sumOfTwoNumbers(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;

    for(let start = a; start <= b; start++){
        for(let end = a; end <= b; end++){
            counter++;
            if(start + end === magicNum){
                console.log(`Combination N:${counter} (${start} + ${end} = ${magicNum})`);
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
    }
    if(!flag){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["1",

"10",

"5"])