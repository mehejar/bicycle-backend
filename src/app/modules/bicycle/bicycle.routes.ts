import express from 'express'
import { bicycleController } from './bicycle.controller'

const router = express.Router()

router.post('/', bicycleController.createBicycle)
router.get('/', (req, res, next) => {
    if (req.query.searchTerm) {
        return bicycleController.getSearchBicycles(req, res);
    }
    next();
}, bicycleController.getBicycles)
router.put('/:_id', bicycleController.updateABicycles)
router.get('/:_id', bicycleController.getABicycle)
router.delete('/:_id', bicycleController.deleteABicycle)

export const bicycleRoutes = router