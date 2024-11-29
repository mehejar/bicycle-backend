"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
const mongoose_1 = require("mongoose");
const bicycleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        unique: true
    },
    brand: {
        type: String,
        required: [true, 'Brand name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    type: {
        type: String,
        enum: {
            values: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
            message: '{VALUE} is not a valid product type'
        },
        required: [true, 'Product type is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [10, 'Description must be at least 10 characters long']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity must be a non-negative number']
    },
    inStock: {
        type: Boolean,
        required: [true, 'InStock field is required']
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.Bicycle = (0, mongoose_1.model)('Bicycle', bicycleSchema);
