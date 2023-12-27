import { Router } from "express";
import {
  getPermissions,
  permissionController,
} from "../controller/PermissionController";
import { createRole, getRoles } from "../controller/RoleController";

const router = Router();
router.post("/permission", permissionController);
router.post("/create-role", createRole);
router.get("/get-permission", getPermissions);
router.get("/get-all-roles", getRoles);
export default router;
