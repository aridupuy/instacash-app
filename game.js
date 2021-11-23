class Game {
    game01(m, n) {
        /*m=[2,5,8,14,0], n=10*/
        let respuesta=[];
        m=m.reverse();
        for( let current of m){
            let index = m.indexOf(current);
            let array= m.filter((value, subindex) => {
                if (subindex != index) {
                    // console.log(current + "+" + value + "=" + (current + value));
                    return current + value == n;
                }
                return false;
            });
            if(array.length>0)
                respuesta.push(array[0]);
        }
        return respuesta;
    }
}

module.exports = Game;
