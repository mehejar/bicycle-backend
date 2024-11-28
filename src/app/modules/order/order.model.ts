import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import { Bicycle } from "../bicycle/bicycle.model";
import { IBicycle } from "../bicycle/bicycle.interface";


const orderSchema = new Schema<TOrder>({
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, default: 0 }
})

orderSchema.pre('save', async function (next) {
    const order = this;

    const product = await Bicycle.findById(order.product);
    if (!product) {
        return next(new Error('Product not found'));
    }

    if (product.quantity < order.quantity) {
        return next(new Error('Product is out of stock'))
    }

    const newQuantity = product.quantity - order.quantity;
    product.quantity = newQuantity
    product.save();

    // const newtotalPrice = order.quantity * product.price;
    // order.totalPrice = newtotalPrice;
    // order.save();

    next()
})

export const Order = model<TOrder>('Order', orderSchema);

