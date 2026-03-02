let persona1 = "tijeras"
let persona2 = "piedra"

switch (persona1) {
    case "piedra":
        if (persona2 === "tijeras") {
            console.log("Gana jugador 1");
        } else if (persona2 === "papel") {
            console.log("Gana jugador 2");
        }
        break;

    case "tijeras":
        if (persona2 === "papel") {
            console.log("Gana jugador 1");
        } else if (persona2 === "piedra") {
            console.log("Gana jugador 2");
        }
        break;

    case "papel":        
        if (persona2 === "piedra") {
            console.log("Gana jugador 1");
        }
        if (persona2 === "tijeras") {
            console.log("Gana jugador 2");
        }
        break;

    default: 
        console.log("nadie gana");
}
