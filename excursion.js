function excursion(input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let ticketCountTranspot = Number(input[2]);
    let ticketCountMuseum = Number(input[3]);

    let nightsForOne = nights * 20;
    let transportPrice = ticketCountTranspot * 1.60;
    let museumPrice = ticketCountMuseum * 6;

    let finalPriceForOne = nightsForOne + transportPrice + museumPrice;
    let sumForAll = people * finalPriceForOne;

    let finalSum = sumForAll + (sumForAll * 0.25);

    console.log(finalSum.toFixed(2));
}
excursion(["131",
"9",
"33",
"46"])
