import { Request, Response } from "express";
import statusCodes from "../utils/status-codes.map";

export const login = async(req:Request, res:Response) => {
    res.status(statusCodes.SUCCESS).json({"message":"success"}).end();
}