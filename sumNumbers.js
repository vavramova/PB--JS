function sumNumbers(input){
    let n = Number(input[0]);
 
    let index = 1;
    let counter = Number(input[index]);
   

    let sum = 0;

    while(sum < n){
        
        counter = Number(input[index]);
        sum += counter;
        index++;
        
    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"])