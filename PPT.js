let Persona1 = "tijeras"
let persona2 = "piedra"


if (persona1 === "piedra" && persona2 === "tijeras") {console.log("Gana jugador 1")} else

    if (persona1 === "tijeras" && persona2 === "papel") {console.log("Gana jugador 1")} else 

        if (persona1 === "papel" && persona2 === "piedra") {console.log("Gana jugador 1")} else {
}
if (persona1 === "papel" && persona2 === "tijeras") {console.log("Gana jugador 2")} else

    if (persona1 === "tijeras" && persona2 === "piedra") {console.log("Gana jugador 2")} else

        if (persona1 === "piedra" && persona2 === "papel") {console.log("Gana jugador 2")} else
            if (persona1 === persona2) {console.log("Nadie gana") ;}
