function onTimeForTheExam(input) {
    let hoursExam = Number(input[0]);
    let minsExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minsArrive = Number(input[3]);

    let timeExam = hoursExam * 60 + minsExam;
    let timeArrive = hoursArrive * 60 + minsArrive;
    let diff = Math.abs(timeArrive - timeExam);
    let h = Math.floor(diff / 60);
    let min = diff % 60;

    if(timeArrive < timeExam && (timeExam - timeArrive > 30)) {
        console.log("Early");
        if(h > 0) {
            if(min < 10){
                console.log(`${h}:0${min} hours before the start`);
            }else{
                console.log(`${h}:${min} hours before the start`);
            }
        }else {
            console.log(`${min} minutes before the start`);
        }
    }else if (timeArrive <= timeExam){
        console.log("On time");
        if(min > 0){
            console.log(`${min} minutes before the start`);
        }

    }else {
        console.log("Late");
        if(h > 0) {
            if(min < 10){
                console.log(`${h}:0${min} hours after the start`);
            }else {
                console.log(`${h}:${min} hours after the start`);
            }
        }else {
            console.log(`${min} minutes after the start`)
        }
    }
}