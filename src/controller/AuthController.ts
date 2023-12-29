import { Request, Response } from "express";
import { z } from "zod";
import EmployeeModel from "../models/Employee";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req: Request, res: Response) => {
  try {
    const registerValidator = z.object({
      email: z.string(),
      password: z.string(),
    });
    registerValidator.parse(req.body);
    const { email, password } = req.body;
    const isUser = await EmployeeModel.findOne({ email: email });
    if (!isUser) {
      return res.status(400).json({ message: "User not present" });
    }
    const isCredential = await bcrypt.compare(password, isUser.password);
    if (!isCredential) {
      return res.status(404).json({ message: "Access denied" });
    }
    const token = jwt.sign(
      { id: isUser._id, role: isUser.roles },
      process.env.JWT_SECRET as string
    );

    res.status(200).json({ token, isUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
