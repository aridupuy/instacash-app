import { Item } from '../gilded-rose';
import { ItemDefault } from './itemDefault';
export class ItemSulfuras extends ItemDefault{
    
    updateQuality():Item {
        return this.item;
    }
    
}