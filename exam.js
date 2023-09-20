function exam(input) {
    let index = 0;
    let allStudents = Number(input[index]);
    index++;

    let stuentsFail = 0;
    let studentPoor = 0;
    let studentGood = 0;
    let studentExcelent = 0;
    let total = 0;

    while(index < input.length){
        let grades = Number(input[index]);
        total += grades; 
    if(grades < 3.00){
        stuentsFail++; 
             
        index++;
    } else if(grades >= 3.00 && grades <= 3.99){
        studentPoor++; 
          
        index++;
    } else if(grades >= 4.00 && grades <= 4.99) {
        studentGood++; 
       
    index++;
    } else {
        studentExcelent++;
      
        index++;
    }

    }

  

    let prFail = (stuentsFail / allStudents) * 100;
    let prPoor = (studentPoor / allStudents) * 100;
    let prGood = (studentGood / allStudents) * 100;
    let prExcelent = (studentExcelent / allStudents) * 100;

    let avg = (total / allStudents) 



    console.log(`Top students: ${prExcelent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${prGood.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${prPoor.toFixed(2)}%`);
    console.log(`Fail: ${prFail}%`);
    console.log(`Average: ${avg.toFixed(2)}`);
    }

exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
