import { Request, Response } from "express";
import Roles from "../models/Role";
import { z } from "zod";

export const createRole = async (req: Request, res: Response) => {
  try {
    const roleBodySchema = z.object({
      roleName: z.string(),
      permissions: z.object({}).array(),
    });
    roleBodySchema.parse(req.body);
    const { roleName, permissions } = req.body;
    const newRole = new Roles({
      roleName,
      permissions,
    });
    await newRole.save();
    res.status(200).json({ message: "Role created" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const getRoleList = await Roles.find();
    res.status(200).json(getRoleList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
