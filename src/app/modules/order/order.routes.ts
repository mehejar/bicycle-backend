import express from 'express'
import { orderController } from './order.controller'


const router = express.Router()
router.post('/', orderController.createOrder)
router.get('/', orderController.getOrders)
router.get('/revenue', orderController.calculateTotalRevenue)



export const orderRoutes = router