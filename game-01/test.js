const app = require("./game");
const game = new app();
let hoy = new Date();
let secondsini = hoy.getMilliseconds();

let respuesta = game.game01([2, 5, 8, 14,15,115,1,3,9,5,74,90,545,656,1000,3,15,9,7,5,-8,1,-2,-1,-18,-25,-30,-3,-5,-9,-4,-5,-6,2, 5, 8, 14,15,115,1,3,9,5,74,90,545,656,1000,3,15,9,7,5,-8,1,-2,-1,-18,-25,-30,-3,-5,-9,-4,-5,-6,2, 5, 8, 14,15,115,1,3,9,5,74,90,545,656,1000,3,15,9,7,5,-8,1,-2,-1,-18,-25,-30,-3,-5,-9,-4,-5,-6,2, 5, 8, 14,15,115,1,3,9,5,74,90,545,656,1000,3,15,9,7,5,-8,1,-2,-1,-18,-25,-30,-3,-5,-9,-4,-5,-6,2, 5, 8, 14,15,115,1,3,9,5,74,90,545,656,1000,3,15,9,7,5,-8,1,-2,-1,-18,-25,-30,-3,-5,-9,-4,-5,-6], 205);
console.log(respuesta);
let ahora = new Date();
console.log(ahora.getMilliseconds()-secondsini+": Milliseconds");

respuesta = game.game01([2, 5, 8, 14, 0], 10);
console.log(respuesta);
ahora = new Date();
console.log(ahora.getMilliseconds()-secondsini+": Milliseconds");