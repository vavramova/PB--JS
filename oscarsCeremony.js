function oscarsCeremony(input) {

    let rent = Number(input[0]);

    let statues = rent - (rent * 0.30);
    let food = statues - (statues * 0.15);
    let music = food * 0.50;

    let neededMoney = rent + statues + food + music;

    console.log(neededMoney.toFixed(2));
}
oscarsCeremony(["5555"])