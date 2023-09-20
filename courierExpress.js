function courierExpress(input) {
    let package = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let delivery = 0;

    if(type === "standard") {
        if(package < 1){
            delivery = 0.03 * distance;
        } else if(package >= 1 && package < 10) {
            delivery = 0.05 * distance;
        } else if(package >= 10 && package < 40) {
            delivery = 0.10 * distance;
        } else if(package >= 40 && package < 90) {
            delivery = 0.15 * distance;
        } else if(package >= 90 && package < 150) {
            delivery = 0.20 * distance;
        }
    } else if(type === "express"){
        let extra = 0;
        if(package < 1){
            extra = ((0.03 * 80/100) * package) * distance
            delivery = (0.03 * distance) + extra;
        } else if(package >= 1 && package < 10) {
            extra = ((0.05 * 40/100) * package) * distance;
            delivery = (0.05 * distance) + extra;
        } else if(package >= 10 && package < 40) {
            extra = ((0.10 * 5/100) * package) * distance;
            delivery = (0.10 * distance) + extra;
        } else if(package >= 40 && package < 90) {
            extra = ((0.15 * 2/100 )* package) * distance;
            delivery = (0.15 * distance) + extra;
        } else if(package >= 90 && package < 150) {
            extra = ((0.20 * 1/100) * package) * distance;
            delivery = (0.20 * distance) + extra;
        }
    }

    console.log(`The delivery of your shipment with weight of ${package.toFixed(3)} kg. would cost ${delivery.toFixed(2)} lv.`);

}
courierExpress(["20", 
"standard",
"349"])

