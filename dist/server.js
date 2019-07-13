"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// this will load app which contains our main structure and logic
const app_1 = __importDefault(require("./app"));
// use this line to get port from environment variable
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
