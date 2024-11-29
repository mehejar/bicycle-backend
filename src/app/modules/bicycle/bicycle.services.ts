
import { IBicycle } from "./bicycle.interface";
import { Bicycle } from "./bicycle.model";



const createBicycleIntoDB = async (bicycleData: IBicycle) => {
    const result = await Bicycle.create(bicycleData)
    return result;
}


const getAllBicycleFromDB = async () => {
    const result = await Bicycle.find();
    return result;
}
// const getAllBicycleFromDB = async () => {
//     const result = await Bicycle.find()
//     return result;
// }

const getSingleBicycleFromDB = async (_id: string) => {
    const result = await Bicycle.findOne({ _id })
    return result;
}
const deleteSingleBicycleFromDB = async (_id: string) => {
    const result = await Bicycle.deleteOne({ _id })
    return result;
}



const updateSingleBicycleDetails = async (_id: string, updateDetail: IBicycle) => {
    const result = await Bicycle.findByIdAndUpdate(_id, { $set: { ...updateDetail } }, { new: true })
    return result;
}



const getSearchBicycle = async (searchTerm: string) => {
    const result = await Bicycle.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { brand: { $regex: searchTerm, $options: 'i' } },
            { type: { $regex: searchTerm, $options: 'i' } }
        ]
    })
    return result;
}

// const updateBicycleDetails = async (_id: string) =>{
//     const result = await Bicycle.updateOne({
//         $or: [name: ]
//     })
// }


export const bicycleServices = {
    createBicycleIntoDB,
    getAllBicycleFromDB,
    getSearchBicycle,
    getSingleBicycleFromDB,
    deleteSingleBicycleFromDB,
    updateSingleBicycleDetails
}