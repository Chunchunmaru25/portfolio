
import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
    res.status(200).json({ status: 'OK', Message: 'PORTFOLIO WORKING' });
});

export default indexRouter;
