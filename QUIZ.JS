let participante = 0
  
// pregunta 1
let pregunta1 = prompt("¿Cuál es el resultado de 2 + 2?")

if (pregunta1 === "4") { participante += 1} else ( participante += 0)

// pregunta 2
let pregunta2 = prompt("¿Cuál es la capital de Rusia?")
if (pregunta2 === "Moscú") { participante += 1} else ( participante += 0)

// pregunta 3
let pregunta3 = prompt("planeta más grande del sistema solar")

if (pregunta3 === "Júpiter") { participante += 1} else ( participante += 0)

// pregunta 4
let pregunta4 = prompt("¿Quien descubrió América?")

if (pregunta4 === "Cristobal Colón") { participante += 1} else ( participante += 0)

    // pregunta 5

let pregunta5 = prompt("¿En qué año inició la Segunda Guerra Mundial?")

if (pregunta5 === "1939") { participante += 1} else ( participante += 0)



    // resultado final

    if (participante < 3 ) {console.log("Reprobaste el quiz, tu puntaje es de " + participante)} 
    else (console.log("Aprobaste el quiz, tu puntaje es de " + participante))
