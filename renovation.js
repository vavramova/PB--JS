function renovation(input) {

    let height = Number(input[0]);
    let width = Number(input[1]);
    let percentage = Number(input[2]);

    let room = height * width * 4;
    let wallsToPaint = room - (room * percentage /100);

    let index = 3;
    let command = input[index];
    index++;

    

    while(true) {
        let liters = Number(command);
        wallsToPaint -= liters;

        command = input[index];
        index++;

        if(command === "Tired!"){
            console.log(`${wallsToPaint} quadratic m left.`);
            break;
        }

        if(wallsToPaint < 0){
            console.log(`All walls are painted and you have ${Math.abs(wallsToPaint)} l paint left!`);
            break;
        }

        if(wallsToPaint === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            break;
        }
        
    }


}
renovation(["2",

"3",

"25",

"6",

"7",

"8"])