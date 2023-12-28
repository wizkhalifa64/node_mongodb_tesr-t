import { Router } from "express";
import { createEmployee } from "../controller/EmployeeController";

const router = Router();
router.post("/create-employee", createEmployee);

export default router;
