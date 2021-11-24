import { Item } from '../gilded-rose';
import {I_item} from '../interface/I_item';
export class ItemDefault implements I_item{
    item!: Item;
    constructor(item:Item){
        return this.setItem(item);
    }
    updateQuality():Item{
        this.changeQuality();
        this.changeSellIn();
        if(this.item.quality>=50){
            this.item.quality=50;
        }
        if(this.item.sellIn<0){
            this.item.quality-=2;
        }
        if(this.item.quality<0){
            this.item.quality=0;
        }
        return this.item;
    }
    setItem(item:Item){
        this.item=item;
        return this;
    }
    changeQuality(){
        this.item.quality--;
    }
    changeSellIn(){
        this.item.sellIn--;
    }
}