"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var _config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    mongoConnection: (_a = process.env.MONGO_CONNECTION) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017',
    mongoDatabase: (_b = process.env.MONGO_DB) !== null && _b !== void 0 ? _b : 'test',
};
exports.default = _config;
