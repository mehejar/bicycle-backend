"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./bicycle.controller");
const router = express_1.default.Router();
router.post('/', bicycle_controller_1.bicycleController.createBicycle);
router.get('/', (req, res, next) => {
    if (req.query.searchTerm) {
        return bicycle_controller_1.bicycleController.getSearchBicycles(req, res);
    }
    next();
}, bicycle_controller_1.bicycleController.getBicycles);
router.put('/:_id', bicycle_controller_1.bicycleController.updateABicycles);
router.get('/:_id', bicycle_controller_1.bicycleController.getABicycle);
router.delete('/:_id', bicycle_controller_1.bicycleController.deleteABicycle);
exports.bicycleRoutes = router;
