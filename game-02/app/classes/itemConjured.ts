import { ItemDefault } from './itemDefault';
export class itemConjured extends ItemDefault{
    
    changeQuality(){
        this.item.quality-=2;
    }
}
    