"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemSulfuras_1 = require("./ItemSulfuras");
var itemDefault_1 = require("./itemDefault");
var itemBackstage_1 = require("./itemBackstage");
var itemAgedBrie_1 = require("./itemAgedBrie");
var itemConjured_1 = require("./itemConjured");
var itemFactory = /** @class */ (function () {
    function itemFactory() {
    }
    itemFactory.factory = function (item) {
        switch (item.name) {
            case "Sulfuras, Hand of Ragnaros":
                return new ItemSulfuras_1.ItemSulfuras(item);
            case "Backstage passes to a TAFKAL80ETC concert":
                return new itemBackstage_1.itemBackstage(item);
            case "Aged Brie":
                return new itemAgedBrie_1.itemAgedBrie(item);
            case "conjured":
                return new itemConjured_1.itemConjured(item);
            default:
                return new itemDefault_1.ItemDefault(item);
        }
    };
    return itemFactory;
}());
exports.itemFactory = itemFactory;
