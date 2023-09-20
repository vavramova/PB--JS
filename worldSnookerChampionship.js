function worldSnookerChampionship(input) {

    //        Четвъртфинал       Полуфинал          Финал

    //Стандартен    55.50 £/бр.      75.88 £/бр.       110.10 £/бр.

    //Премиум       105.20 £/бр.     125.22 £/бр.      160.66 £/бр.

    //ВИП           118.90 £/бр.     300.40 £/бр.      400 £/бр.

    let stage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let photo = input[3];

    let ticketPrice = 0;

    switch (stage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                ticketPrice = ticketCount * 55.50;
            } else if (ticketType === "Premium") {
                ticketPrice = ticketCount * 105.20;
            } else {
                ticketPrice = ticketCount * 118.90;
            }

            break;
        case "Semi final":
            if (ticketType === "Standard") {
                ticketPrice = ticketCount * 75.88;
            } else if (ticketType === "Premium") {
                ticketPrice = ticketCount * 125.22;
            } else {
                ticketPrice = ticketCount * 300.40;
            }
            break;
        case "Final":
            if (ticketType === "Standard") {
                ticketPrice = ticketCount * 110.10;
            } else if (ticketType === "Premium") {
                ticketPrice = ticketCount * 160.66;
            } else {
                ticketPrice = ticketCount * 400.00;
            }
            break;
    }
    if (ticketPrice > 4000) {
        ticketPrice = ticketPrice - (ticketPrice * 0.25);

    } else if (ticketPrice > 2500) {
        ticketPrice = ticketPrice - (ticketPrice * 0.10);
        if (photo === "Y") {
            let photoPrice = ticketCount * 40;
            ticketPrice += photoPrice;
        }
    }

    console.log(ticketPrice.toFixed(2));
}
worldSnookerChampionship(["Quarter final",

    "Standard",

    "11",

    "N"])