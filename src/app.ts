import { Request, Response } from "express"
import cors from 'cors'
import express from 'express'
import { orderRoutes } from "./app/modules/order/order.routes"
import { bicycleRoutes } from "./app/modules/bicycle/bicycle.routes"

// const express = require('express')
const app = express()

app.use(express.json());
app.use(cors());

app.use('/api/products', bicycleRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app