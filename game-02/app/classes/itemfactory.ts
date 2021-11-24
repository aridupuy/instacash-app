import { I_item } from '../interface/I_item';
import { ItemSulfuras } from './ItemSulfuras';
import { ItemDefault } from './itemDefault';
import { itemBackstage } from './itemBackstage';
import { itemAgedBrie } from './itemAgedBrie';
import { itemConjured } from './itemConjured';
import { Item } from '../gilded-rose';
export class itemFactory{
    static factory(item:Item):I_item{
        switch (item.name){
            case "Sulfuras, Hand of Ragnaros":
                return new ItemSulfuras(item);
            case "Backstage passes to a TAFKAL80ETC concert":
                return new itemBackstage(item);
            case "Aged Brie":
                return new itemAgedBrie(item);
            case "conjured":
                return new itemConjured(item);
            default:
                return new ItemDefault(item);
        }
    }
}