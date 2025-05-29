"use strict";
let userName = "Max";
console.log(`Hello, ${userName}!`);
const name1 = "Max"; // This is valid;
console.log(typeof name1); // Outputs: string
const setting = {
    difficulty: "easy",
    minLevel: 50,
    didStart: true,
    players: ["Max", "Anna", "Tom"],
};
function loadData(params) {
    console.log(`Loading data with difficulty: ${params.difficulty}`);
    console.log(`Minimum level: ${params.minLevel}`);
    console.log(`Did start: ${params.didStart}`);
    console.log(`Players: ${params.players.join(", ")}`);
}
loadData(setting);
