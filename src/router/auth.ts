import { Router } from "express";
import { register } from "../controller/AuthController";

const router = Router();
router.post("/login", register);

export default router;
