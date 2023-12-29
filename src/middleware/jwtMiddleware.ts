import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const authorise = (roles: any[] = []) => {
  if (typeof roles === "string") {
    roles = [];
  }
  return async (req: Request, res: Response, next: NextFunction) => {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).json({ message: "Access denied" });
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET as string);
    if (roles.includes("hi")) {
    }
  };
};
