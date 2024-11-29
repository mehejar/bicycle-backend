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
exports.orderController = void 0;
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        console.log("Order Data: ", orderData);
        const result = yield order_services_1.orderServices.createOrderIntoDB(orderData);
        res.status(200).json({
            message: "You Successfully Ordered A Awasome Bicycle",
            success: true,
            date: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.getOrderFromDB();
        res.status(200).json({
            message: "All orders has retrieved",
            success: true,
            date: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Orders Reevenue
const calculateTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.getOrdersRevenueFromDB();
        res.status(200).json({
            message: "Total Revenue Here",
            success: true,
            date: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.orderController = {
    createOrder,
    getOrders,
    calculateTotalRevenue
};
