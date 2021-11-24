"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemDefault = /** @class */ (function () {
    function ItemDefault(item) {
        return this.setItem(item);
    }
    ItemDefault.prototype.updateQuality = function () {
        this.changeQuality();
        this.changeSellIn();
        if (this.item.quality >= 50) {
            this.item.quality = 50;
        }
        if (this.item.sellIn < 0) {
            this.item.quality -= 2;
        }
        if (this.item.quality < 0) {
            this.item.quality = 0;
        }
        return this.item;
    };
    ItemDefault.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ItemDefault.prototype.changeQuality = function () {
        this.item.quality--;
    };
    ItemDefault.prototype.changeSellIn = function () {
        this.item.sellIn--;
    };
    return ItemDefault;
}());
exports.ItemDefault = ItemDefault;
