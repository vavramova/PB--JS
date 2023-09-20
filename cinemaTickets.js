function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSpots = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;
            switch (ticketType) {
                case "student": studentTicket++; break;
                case "standard": standardTicket++; break;
                case "kid": kidTicket++; break;
            }

            if (ticketCounter === freeSpots) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        totalTickets += ticketCounter;
        let prFull = ticketCounter / freeSpots * 100;
        console.log(`${movieName} - ${prFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let prStudent = studentTicket / totalTickets * 100;
    let prStandard = standardTicket / totalTickets * 100;
    let prKid = kidTicket / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${prStudent.toFixed(2)}% student tickets.`);
    console.log(`${prStandard.toFixed(2)}% standard tickets.`);
    console.log(`${prKid.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])