"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var itemDefault_1 = require("./itemDefault");
var itemBackstage = /** @class */ (function (_super) {
    __extends(itemBackstage, _super);
    function itemBackstage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    itemBackstage.prototype.updateQuality = function () {
        _super.prototype.updateQuality.call(this);
        if (this.item.sellIn <= 10) {
            this.item.quality++;
        }
        if (this.item.sellIn <= 5) {
            this.item.quality++;
        }
        if (this.item.sellIn == 0) {
            this.item.quality = 0;
        }
        return this.item;
    };
    itemBackstage.prototype.changeQuality = function () {
        this.item.quality++;
    };
    return itemBackstage;
}(itemDefault_1.ItemDefault));
exports.itemBackstage = itemBackstage;
