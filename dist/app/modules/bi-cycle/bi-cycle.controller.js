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
exports.bicycleController = void 0;
const bi_cycle_services_1 = require("./bi-cycle.services");
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycle = req.body;
        const result = yield bi_cycle_services_1.bicycleServices.createBicycleIntoDB(bicycle);
        res.status(200).json({
            success: true,
            message: "Student is Created",
            date: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.bicycleController = {
    createBicycle,
};
