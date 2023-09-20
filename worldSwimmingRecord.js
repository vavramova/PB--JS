function worldSwimmingRecord(input){

    let recordInSec = Number(input[0]);
    let lengthInMeters = Number(input[1]);
    let TimeInSecForOneMeter = Number(input[2]);

    let timeNeeded = lengthInMeters * TimeInSecForOneMeter;
    let slowing = Math.floor(lengthInMeters / 15) * 12.5;
    let totalTime = timeNeeded + slowing;

    if(recordInSec > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67",

"3017","5.03"])