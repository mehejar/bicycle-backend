"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const bicycle_model_1 = require("../bicycle/bicycle.model");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, default: 0 }
});
orderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = this;
        const product = yield bicycle_model_1.Bicycle.findById(order.product);
        if (!product) {
            return next(new Error('Product not found'));
        }
        if (product.quantity < order.quantity) {
            return next(new Error('Product is out of stock'));
        }
        const newQuantity = product.quantity - order.quantity;
        product.quantity = newQuantity;
        product.save();
        // const newtotalPrice = order.quantity * product.price;
        // order.totalPrice = newtotalPrice;
        // order.save();
        next();
    });
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
