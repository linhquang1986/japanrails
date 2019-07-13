"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index")); // imports all routes from routes module
const cors_1 = __importDefault(require("cors")); // cors is using to resolve CORS
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        // enable cors by adding cors middleware
        this.app.use(cors_1.default());
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        // add routes
        this.app.use("/api/v1", index_1.default);
    }
}
exports.default = new App().app;
