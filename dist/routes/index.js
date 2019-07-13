"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crawRoute_1 = __importDefault(require("./crawData/crawRoute"));
const router = express_1.Router();
// we will add routes to this default router in future
router.use('/rsroute', crawRoute_1.default);
exports.default = router;
