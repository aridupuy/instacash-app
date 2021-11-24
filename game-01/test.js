const app = require("./game");
const game = new app();
let hoy = new Date();
let secondsini = hoy.getMilliseconds();

let respuesta = game.game01([2, 5, 8, 14, 0,10,15,115,1,3,9,5,74,90,545,656,1000,3,15,9,7,5,4,1], 1015);
console.log(respuesta);

let ahora = new Date();
console.log(ahora.getMilliseconds()-secondsini+": Milliseconds");