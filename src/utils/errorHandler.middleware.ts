import { NextFunction, Request, Response } from 'express';

export const errorHandler = (fn:(req:Request, res:Response) => void) => async (req:Request, res:Response,next:NextFunction) => {
        try{
            await fn(req, res);
        } catch(err){
            console.error('Error:::',err);
            next(err);
        }
    };