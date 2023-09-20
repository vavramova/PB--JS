function everest(input) {
    let index = 0;
    let command = input[index];
    index++;

    let start = 5364;
    let end = 8848;
    let days = 1;
    let maxDays = 5;
    let flag = true;

    while(command !== "END"){
        if(command === "Yes"){
            days++;
            if(days > maxDays){
                break;
            }
            command = input[index];
            index++;
        
        let meters = Number(command);
        start += meters;  
        if(start >= end){
            flag = false
            console.log(`Goal reached for ${days} days!`);

            break;
        }   
        command = input[index];
        index++
        }else  if(command === "No"){
            command = input[index];
            index++;
            let meters = Number(command);
            start += meters;
            if(start >= end){
                flag = false
                console.log(`Goal reached for ${days} days!`);
                break;
            }
            command = input[index];
            index++;
        
        }
       
    }
    if(flag){
    console.log("Failed!");
    console.log(`${start}`);
    }
}
everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])
