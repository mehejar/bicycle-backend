import { orderServices } from "./order.services";
import { Request, Response } from "express"

const createOrder = async (req: Request, res: Response) => {


    try {
        const orderData = req.body;
        console.log("Order Data: ", orderData)
        const result = await orderServices.createOrderIntoDB(orderData)

        res.status(200).json({
            message: "You Successfully Ordered A Awasome Bicycle",
            success: true,
            date: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getOrders = async (req: Request, res: Response) => {


    try {

        const result = await orderServices.getOrderFromDB()

        res.status(200).json({
            message: "All orders has retrieved",
            success: true,
            date: result
        })
    } catch (err) {
        console.log(err)
    }
}
// Orders Reevenue
const calculateTotalRevenue = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getOrdersRevenueFromDB()
        res.status(200).json({
            message: "Total Revenue Here",
            success: true,
            date: result
        })
    } catch (err) {
        console.log(err)
    }
}

export const orderController = {
    createOrder,
    getOrders,
    calculateTotalRevenue
}