import { Request, Response } from "express";
import { IRequest } from "../middlewares/authentication";
import Post from "../models/PostModel";
import mongoose from "mongoose";

export default async (req: Request, res: Response) => {
    try {
        let userId = new mongoose.Types.ObjectId((req as IRequest).user.userId)
        let data = await Post.find({ userId: userId })
        res.status(200).json({ data, success: true })
    } catch (error) {
        console.log(">>>>>>",error);  
        
        res.status(500).json({ message: 'Internal server error', success: false })
    }



}