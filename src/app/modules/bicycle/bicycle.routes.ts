import express from 'express'
import { bicycleController } from './bicycle.controller'

const router = express.Router()

router.post('/', bicycleController.createBicycle)
router.get('/', bicycleController.getSearchBicycles)
router.get('/', bicycleController.getBicycles)
router.put('/:_id', bicycleController.updateABicycles)
router.get('/:_id', bicycleController.getABicycle)
router.delete('/:_id', bicycleController.deleteABicycle)

export const bicycleRoutes = router