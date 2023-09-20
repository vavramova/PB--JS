function books(input){
    let pages = Number(input[0]);
    let hourPages = Number (input[1]);
    let days = Number(input[2]);
    let allBook = pages / hourPages;
    let daily = allBook / days;

    console.log(daily);
}

books([212, 20, 2])