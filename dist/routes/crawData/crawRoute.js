"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../../controllers/");
const router = express.Router();
router.get("/:sfrom/:sto", (req, res) => {
    const { sfrom, sto } = req.params;
    controllers_1.ctrJapan.scrapeMedium(sfrom, sto).then(data => {
        const crawData = { rsData: data };
        return res.send(data);
    });
});
exports.default = router;
