class Game {
    game01(m,n){
        m.sort((actual,siguiente)=>{
            if(actual<siguiente){
                return  1;
            }
            else{
                return -1;
            }
        });
        return this.essubconjuntosum(m,m.length,n,n);
    }
    essubconjuntosum(arr,length,sum,buscado){
        if(sum-arr[length]==0){
            if(arr[length]==buscado-sum)
                return false;
            return [buscado-sum,arr[length]];
        }
        if(length==0 && sum!=0){
            return false;
        }
        if (arr[length - 1] > sum)
            return this.essubconjuntosum(arr, length- 1, sum,buscado); 
        return this.essubconjuntosum(arr,length-1,sum,buscado) || this.essubconjuntosum(arr,length-1,sum-arr[length-1],buscado);
    }
}

module.exports = Game;
