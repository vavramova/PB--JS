function hotelRoom(input) {
    let month = input[0];
    let time = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if(month === "May" || month === "October") {
         studioPrice = 50 ;
         apartmentPrice = 65;
        if(time > 7 && time <=14) {
            studioPrice *= 0.95;
        }else if(time > 14){
            studioPrice *= 0.70;
            apartmentPrice *= 0.90;
        }
    } else if(month === "June" || month === "September"){
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if(time > 14){
            studioPrice *= 0.80;
            apartmentPrice *=  0.90;
        }
    } else {
        studioPrice = 76 ;
        apartmentPrice = 77 ;
        if(time > 14){
            apartmentPrice *= 0.90;
        }
    }
    studioPrice *= time;
    apartmentPrice *= time
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(["May", "15"])