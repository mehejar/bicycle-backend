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
const bicycle_services_1 = require("./bicycle.services");
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycleData = req.body;
        console.log("Bicycle Data: ", bicycleData);
        const result = yield bicycle_services_1.bicycleServices.createBicycleIntoDB(bicycleData);
        res.status(200).json({
            message: "A New Bicycle Model Added Successfully",
            success: true,
            date: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const getBicycles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bicycle_services_1.bicycleServices.getAllBicycleFromDB();
        res.status(200).json({
            message: "All bicycles retrieved Successfully",
            success: true,
            date: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const getABicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params._id;
        const result = yield bicycle_services_1.bicycleServices.getSingleBicycleFromDB(productId);
        res.status(200).json({
            message: "All bicycles retrieved Successfully",
            success: true,
            date: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const deleteABicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params._id;
        const result = yield bicycle_services_1.bicycleServices.deleteSingleBicycleFromDB(productId);
        res.status(200).json({
            message: "A Bicycle Deleted from Database",
            success: true,
            date: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const getSearchBicycles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield bicycle_services_1.bicycleServices.getSearchBicycle(searchTerm);
        res.status(200).json({
            message: "Your Searched Bicycle is Here",
            success: true,
            date: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const updateABicycles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params._id;
        const updateDetail = req.body;
        const result = yield bicycle_services_1.bicycleServices.updateSingleBicycleDetails(productId, updateDetail);
        res.status(200).json({
            message: "Update A Bicycle Details",
            success: true,
            date: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
exports.bicycleController = {
    createBicycle,
    getBicycles,
    getSearchBicycles,
    getABicycle,
    deleteABicycle,
    updateABicycles
};
