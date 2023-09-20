function equalSumsEvenOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let buff = "";


    for (i = start; i <= end; i++) {
        let numAsString = String(i);
        let sumEven = 0;
        let sumOdd = 0;
        for (let ch = 0; ch < numAsString.length; ch++) {
            if(ch % 2 === 0) {
                sumEven += Number(numAsString[ch]);
            }else {
                sumOdd += Number(numAsString[ch])
            }
        }
        
        if(sumEven === sumOdd) {
            buff += numAsString + " ";

        }
    }
    console.log(buff);
}
equalSumsEvenOddPosition(["123456",

"124000"])