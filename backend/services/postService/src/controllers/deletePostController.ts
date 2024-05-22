import { Request, Response } from "express";
import { IRequest } from "../middlewares/authentication";
import Post from "../models/PostModel";
import mongoose from "mongoose";

export default async (req: Request, res: Response) => {
    try {
        let userId = (req as IRequest).user.userId
        let postId = req.params.id
        const resObj = await Post.deleteOne({ userId: new mongoose.Types.ObjectId(userId), _id: new mongoose.Types.ObjectId(postId) })
        if (resObj.deletedCount > 0) {
            res.status(200).json({ message: 'Post deleted', success: true })

        } else {
            res.status(404).json({ message: 'Post not found', success: false })
        }
    } catch (error) {

        res.status(500).json({ message: 'Internal server error', success: false })
    }
}