function bg(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let buff = "";

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;

    for(let i = start; i <= end; i++){
        let numAsString = String(i);
        let fullNum = "";
        let index = 0;
        n1 = false;
        n2 = false;
        n3 = false;
        n4 = false;
        for(let digit = 0; digit < numAsString.length; digit++){
            let oneNum = numAsString[index];
            index++;

            if(index === 1 && oneNum % 2 !== 0){
                n1 = true;
                fullNum += oneNum;
            }else if(index === 2 && oneNum % 2 !== 0){
                n2 = true;
                fullNum += oneNum
            }else if(index === 3 && oneNum % 2 !== 0){
                n3 = true;
                fullNum += oneNum
            }else if(index === 4 && oneNum % 2 !== 0){
                n4 = true;
                fullNum += oneNum;
            }
            if(n1, n2,n3,n4){
                buff += fullNum + " ";
            }
        }
    }
    console.log(buff)
}
bg(["2345",

"6789"])