function sumOfNumbers(input){
    let n = input[0] + "";
    let sum = 0;

    for(i = 0; i < n.length; i++){
        let digits = Number(n[i]);
        sum += digits;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])