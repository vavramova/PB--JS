function deposit(input){
    let depositSum = Number(input[0]);
    let deadLine = Number(input[1]);
    let annual = Number(input[2]);
    let sum = depositSum + deadLine*((depositSum * annual)/100/12);

    console.log(sum)
}

deposit([200, 3, 5.7])