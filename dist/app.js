"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bi_cycle_routes_1 = require("./app/modules/bi-cycle/bi-cycle.routes");
const express = require('express');
const app = express();
app.use('/api/products', bi_cycle_routes_1.bicycleRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
