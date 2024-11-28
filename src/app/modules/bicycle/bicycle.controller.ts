// import { bicycleServices } from "./bicycle.services"
import { Request, Response } from "express"
import { bicycleServices } from "./bicycle.services";



const createBicycle = async (req: Request, res: Response) => {


    try {
        const bicycleData = req.body;
        console.log("Bicycle Data: ", bicycleData)
        const result = await bicycleServices.createBicycleIntoDB(bicycleData)

        res.status(200).json({
            message: "A New Bicycle Model Added Successfully",
            success: true,
            date: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
}



const getBicycles = async (req: Request, res: Response) => {
    try {
        const result = await bicycleServices.getAllBicycleFromDB();
        res.status(200).json({
            message: "All bicycles retrieved Successfully",
            success: true,
            date: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
}

const getABicycle = async (req: Request, res: Response) => {
    try {
        const productId = req.params._id
        const result = await bicycleServices.getSingleBicycleFromDB(productId);
        res.status(200).json({
            message: "All bicycles retrieved Successfully",
            success: true,
            date: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
}
const deleteABicycle = async (req: Request, res: Response) => {
    try {
        const productId = req.params._id
        const result = await bicycleServices.deleteSingleBicycleFromDB(productId);
        res.status(200).json({
            message: "A Bicycle Deleted from Database",
            success: true,
            date: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
}

const getSearchBicycles = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string

        const result = await bicycleServices.getSearchBicycle(searchTerm);
        res.status(200).json({
            message: "Your Searched Bicycle is Here",
            success: true,
            date: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
}

const updateABicycles = async (req: Request, res: Response) => {
    try {
        const productId = req.params._id
        const updateDetail = req.body

        const result = await bicycleServices.updateSingleBicycleDetails(productId, updateDetail);
        res.status(200).json({
            message: "Update A Bicycle Details",
            success: true,
            date: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
}




export const bicycleController = {
    createBicycle,
    getBicycles,
    getSearchBicycles,
    getABicycle,
    deleteABicycle,
    updateABicycles
}