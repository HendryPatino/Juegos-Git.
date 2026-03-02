let player = 0 
let machine = 0

console.log("Ronda 1")
player += Math.floor(Math.random() * 10)
machine += Math.floor(Math.random() * 10)

console.log(player)
console.log(machine)

player += Math.floor(Math.random() * 10)
machine += Math.floor(Math.random() * 10)

console.log("Ronda 2")
player += Math.floor(Math.random() * 10)
machine += Math.floor(Math.random() * 10)

console.log(player)
console.log(machine)

console.log("Última ronda")
player += Math.floor(Math.random() * 10)
machine += Math.floor(Math.random() * 10)
console.log(player)
console.log(machine)

if (player > machine && player < 21) {
  console.log("Gana el jugador")
} else {
  console.log("jugador pierde")
