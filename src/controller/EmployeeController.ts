import { Request, Response } from "express";
import { z } from "zod";
import Roles from "../models/Role";
import EmployeeModel from "../models/Employee";
import bcrypt from "bcrypt";
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employeevalidation = z.object({
      name: z.string(),
      employee_id: z.string().optional(),
      designation: z.string(),
      gender: z.number(),
      birth_date: z.string(),
      email: z.string(),
      mobile: z.string(),
      status: z.boolean().optional(),
      address: z
        .object({
          city: z.string().optional(),
          state: z.string().optional(),
          country: z.string().optional(),
          postal_ode: z.string().optional(),
        })
        .optional(),
      is_delete: z.boolean().optional(),
      password: z.string(),
      qualification: z
        .object({
          name: z.string().optional(),
          gread: z.string().optional(),
          institution: z.string().optional(),
          passout_year: z.string().optional(),
        })
        .array()
        .optional(),
      verification_details: z
        .object({
          aadher_verified: z.boolean().optional(),
          pan_verified: z.boolean().optional(),
          academic_verified: z.boolean().optional(),
        })
        .optional(),
      roles: z.string(),
    });
    employeevalidation.parse(req.body);

    const isRolePresent = await Roles.find({
      _id: req.body.roles,
    });
    if (!isRolePresent) {
      return res.status(400).json({ message: "Invalid Data" });
    }
    const { password, ...rest } = req.body;
    const salt = await bcrypt.genSalt(5);
    const passwordHash = await bcrypt.hash(password, salt);
    const saveEmployee = new EmployeeModel({ ...rest, password: passwordHash });
    await saveEmployee.save();
    res.status(200).json({ message: "user created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getEmployeeDetails = async (req: Request, res: Response) => {
  try {
    const getData = await EmployeeModel.find({ _id: req.body._id });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
