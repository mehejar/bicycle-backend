import mongoose from "mongoose"
import app from "./app"
import config from "./app/config"

async function main() {
    try {
        // await mongoose.connect("mongodb+srv://bicycleAssignmnet:eKtUBUKnJeZpCL2b@cluster0.b9ejgk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        await mongoose.connect(config.data_url as string)
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    } catch (err) {
        console.log(err)
    }
}

main()