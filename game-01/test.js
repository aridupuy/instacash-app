const app = require("./game");
const game = new app();
let respuesta = game.game01([2, 5, 8, 14, 0,15], 13);
console.log(respuesta);
