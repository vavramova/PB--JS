function numberPyramid(input){
    let n = Number(input[0]);
    let flag = false
    let current = 1;

    for(let rows = 1; rows <= n; rows++) {
        let buff = "";
        for(let col = 1; col <= rows; col++) {
            if(current > n){
                flag = true;
                break;
            }
            buff += current + " ";
            current++;
        }
        console.log(buff);
        if(flag){
            break;

        }
    }

}
numberPyramid(["15"])