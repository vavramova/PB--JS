function barcodeGenerator(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let buff = ""
    

    for(let i = start; i <= end; i++){
        let numAsString = String(i);
        for(let digit = 0; digit < numAsString.length; digit++){
            if(digit % 2 !== 0){
                buff = i + " "
            }
        }
       
    }
    console.log(buff);
}
barcodeGenerator(["2345",

"6789"])