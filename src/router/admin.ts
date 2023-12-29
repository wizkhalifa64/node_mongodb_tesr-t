import { Router } from "express";
import { createRole, getRoles } from "../controller/RoleController";

const router = Router();
router.post("/create-role", createRole);
router.get("/get-all-roles", getRoles);
export default router;
