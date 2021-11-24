import { ItemDefault } from './itemDefault';
import { Item } from '../gilded-rose';
export class itemBackstage extends ItemDefault{
    updateQuality():Item{
        super.updateQuality();
        
        if(this.item.sellIn<=10){
            this.item.quality++;
        }
        if(this.item.sellIn<=5){
            this.item.quality++;
        }
        if(this.item.sellIn==0){
            this.item.quality=0;
        }
        
        return this.item;
    }
    changeQuality(){
        this.item.quality++;
    }
}