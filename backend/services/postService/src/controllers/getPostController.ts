import { Request, Response } from "express";
import { IRequest } from "../middlewares/authentication";
import Post from "../models/PostModel";
import mongoose from "mongoose";


export default async (req: Request, res: Response) => {
    try {
        let userId = (req as IRequest).user.userId
        let postId = req.params.id
        let data = await Post.findOne({ userId: new mongoose.Types.ObjectId(userId), _id: new mongoose.Types.ObjectId(postId) })
        if (data) {
            res.status(200).json({ data, success: true })
        }
        else {
            res.status(404).json({ message: 'Post not found', success: false })
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'Internal server error', success: false })
    }

}