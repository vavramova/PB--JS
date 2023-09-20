function password(input){
    
    let index = 0;
    let name = input[index];
    index++;

    let truePassword = input[index];
    index++;

    let newPassword = input[index];
    index++;

    while(true){
        if(newPassword === truePassword){
            break;
        }
        newPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov",

"1111",

"Pass",

"1324",

"1234"])