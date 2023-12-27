import { Request, Response } from "express";
import PermissionModel, { Permission } from "../models/Permissions";
export const permissionController = async (req: Request, res: Response) => {
  try {
    const { name }: Permission = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });
    const newPermission = new PermissionModel({ name });
    await newPermission.save();
    res.status(200).json({ message: "Permission created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const getPermissions = async (req: Request, res: Response) => {
  try {
    const getAllPermission = await PermissionModel.find();
    res.status(200).json(getAllPermission);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
