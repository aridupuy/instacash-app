import { GildedRose, Item } from './app/gilded-rose';
let items: Item[]  = [];
items.push(new Item("Aged Brie",20,30));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert",15,30));
items.push(new Item("Sulfuras, Hand of Ragnaros",80,30));
items.push(new Item("Ariel",1,30));
items.push(new Item("conjured",5,30));
const GR=new GildedRose(items);
let respuesta1=GR.updateQuality();
console.log(respuesta1);


