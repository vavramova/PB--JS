function readText(input){
    let index = 0;
    let words = input[index];
    index++;

    while(words !== "Stop"){
        console.log(words);
        words = input[index];
        index++;
    }
}
readText(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"])