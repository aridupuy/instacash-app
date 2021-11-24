import { throws } from 'assert';
import { itemFactory } from './classes/itemfactory';
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    updateQuality(){
        for(let item of this.items){
            let index= this.items.indexOf(item);
            let obj = itemFactory.factory(item);
            this.items[index] = obj.updateQuality();
        }
        return this.items;
    }
}
