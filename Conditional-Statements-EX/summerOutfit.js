function summerOutfit(input){
    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    switch(timeOfDay){
        case "Morning":
          if(degrees >= 10 && degrees <= 18){
            let outfit = "Sweatshirt";
            let shoes = "Sneakers";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
          } else if( degrees > 18 && degrees <= 24){
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
          } else{
            let outfit = "T-Shirt";
            let shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
          }
        break;
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
              } else if( degrees > 18 && degrees <= 24){
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
              } else{
                let outfit = "Swim Suit";
                let shoes = "Barefoot";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
              }
        break;
        case "Evening":
            if(degrees >= 10 && degrees <= 18){
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
              } else if( degrees > 18 && degrees <= 24){
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
              } else{
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
              }
        break;
    }
}
summerOutfit(["16",
"Morning"])
