import { Router } from "express";
import SrearchRoute from './crawData/crawRoute';

const router = Router();
// we will add routes to this default router in future
router.use('/rsroute', SrearchRoute);
export default router;