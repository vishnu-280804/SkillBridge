import express from "express";
import {add,count,fetch} from "../controllers/cart.controller.js";
const router = express.Router();

router.post("/add",add);
router.get("/count",count);
router.get("/fetch",fetch)
export default router;