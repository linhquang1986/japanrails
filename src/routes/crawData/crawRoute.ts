import express = require("express");
import { Request, Response } from "express";
import { ctrJapan } from "../../controllers/";

const router = express.Router();

router.get("/:sfrom/:sto", (req: Request, res: Response) => {
    const { sfrom, sto } = req.params;

    ctrJapan.scrapeMedium(sfrom, sto).then(data => {
        const crawData = {rsData: data}
        return res.send(data)
    })
});
export default router;