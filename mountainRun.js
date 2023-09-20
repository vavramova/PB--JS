function mountainRun(input) {

    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let normalDistance = distanceInMeters * timeForOneMeter;
    let distanceWithSlow = Math.floor((distanceInMeters / 50)) * 30;
     
    let finalTime = normalDistance + distanceWithSlow;

    if(finalTime < recordInSec) {
        console.log(`Yes! The new record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        let timeNeeded = finalTime - recordInSec;
        console.log(`"No! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}
mountainRun(["5554.36",

"1340",

"3.23"])