"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itemfactory_1 = require("./classes/itemfactory");
var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
exports.Item = Item;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildedRose.prototype.updateQuality = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var index = this.items.indexOf(item);
            var obj = itemfactory_1.itemFactory.factory(item);
            this.items[index] = obj.updateQuality();
        }
        return this.items;
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
