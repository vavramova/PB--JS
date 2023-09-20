function trainTheTrainers(input) {
    let index = 0;
    let judges = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let sumGrade = 0;
    let counter = 0;

    while(command !== "Finish") {
        counter++;
        let presentationName = command;
        let sumOfGrades = 0;

        for(let i = 0; i < judges; i++) {
            let grade = Number(input[index]);
            index++;

            sumOfGrades += grade;
        }
        let tempAvg = sumOfGrades / judges;
        sumGrade += tempAvg;
        console.log(`${presentationName} - ${tempAvg.toFixed(2)}.`);

        command = input[index];
        index++;
    }

    let avg = sumGrade / counter;
    console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
}
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])