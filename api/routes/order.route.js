import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getOrders,confirm, intent } from '../controllers/order.controllers.js';

const router = express.Router();

router.post("/create-payment-intent/:id",verifyToken, intent);
router.get("/",verifyToken, getOrders);
router.put("/", verifyToken, confirm)

export default router;