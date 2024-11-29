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
exports.bicycleServices = void 0;
const bicycle_model_1 = require("./bicycle.model");
const createBicycleIntoDB = (bicycleData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.create(bicycleData);
    return result;
});
const getAllBicycleFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.find();
    return result;
});
// const getAllBicycleFromDB = async () => {
//     const result = await Bicycle.find()
//     return result;
// }
const getSingleBicycleFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.findOne({ _id });
    return result;
});
const deleteSingleBicycleFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.deleteOne({ _id });
    return result;
});
const updateSingleBicycleDetails = (_id, updateDetail) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.findByIdAndUpdate(_id, { $set: Object.assign({}, updateDetail) }, { new: true });
    return result;
});
const getSearchBicycle = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } },
            { type: { $regex: searchTerm, $options: 'i' } }
        ]
    });
    return result;
});
// const updateBicycleDetails = async (_id: string) =>{
//     const result = await Bicycle.updateOne({
//         $or: [name: ]
//     })
// }
exports.bicycleServices = {
    createBicycleIntoDB,
    getAllBicycleFromDB,
    getSearchBicycle,
    getSingleBicycleFromDB,
    deleteSingleBicycleFromDB,
    updateSingleBicycleDetails
};
