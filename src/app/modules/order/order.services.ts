import { TOrder } from "./order.interface";
import { Order } from "./order.model";



const createOrderIntoDB = async (orderData: TOrder) => {
    const result = await Order.create(orderData)
    return result;
}

const getOrdersFromDB = async () => {
    const result = await Order.aggregate([
        {
            $group: {
                _id: null, // Group all orders together
                totalRevenue: { $sum: "$totalPrice" } // Sum the `amount` field
            }
        },
        {
            $project: {
                _id: 0, // Exclude `_id` from the output
                totalRevenue: 1
            }
        }
    ]);
    return result;
}

// const getTotalrevenue = async () => {
//     const result = await Order.find({})
// }





export const orderServices = {
    createOrderIntoDB,
    getOrdersFromDB
}