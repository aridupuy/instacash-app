class Game {
    game01(m, n) {
        /*m=[2,5,8,14,0], n=10*/
        /* ordeno numericamente de menor a mayor para luego quitar los repetidos mas facilmente.*/
        m.sort((actual,siguiente)=>{
            if(actual<siguiente){
                return  -1;
            }
            else{
                return 1;
            }
        });
        /* achico el array sacando los valores superiores a n y posibles valores repetidos */
        m=m.filter((element,index,array)=>element<=n && array[index-1]!=element);
        for(let current of m){
            /*voy sacando del array el valor actual asi se va haciendo mas corto*/
            m=m.filter((element)=>element != current);
            for(let a of m){
                if(current+a==n){
                    return [current,a];                
                }
            }
        }
        return [];
    }

}

module.exports = Game;
