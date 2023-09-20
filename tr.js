function specialNumbers(input) {
    let num = Number(input[0]);
    let buff = "";

    for (let i = 1111; i <= 9999; i++) {
        let digit = String(i);
        let isSpecial = true;

        for (let ch = 0; ch < digit.length; ch++) {
            if (num % Number(digit[ch]) !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            buff += i + " ";
        }
    }

    console.log(buff);
}
specialNumbers(["3"])