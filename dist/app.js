"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const order_routes_1 = require("./app/modules/order/order.routes");
const bicycle_routes_1 = require("./app/modules/bicycle/bicycle.routes");
// const express = require('express')
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', bicycle_routes_1.bicycleRoutes);
app.use('/api/orders', order_routes_1.orderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
