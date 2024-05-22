import { Request, Response } from "express";
import { IRequest } from "../middlewares/authentication";
import Comment from "../models/CommentModel";
import mongoose from "mongoose";

export default async (req: Request, res: Response) => {
    try {
        let userId = (req as IRequest).user.userId
        let commentId = req.params.id
        let resObj = await Comment.deleteOne({ userId: new mongoose.Types.ObjectId(userId), _id: new mongoose.Types.ObjectId(commentId) })
        if (resObj.deletedCount > 0) {
            res.status(200).json({ message: 'Comment deleted', success: true })

        } else {
            res.status(404).json({ message: 'Comment not found', success: false })
        }
    } catch (error) {
            
            res.status(500).json({ message: 'Internal server error', success: false })
    }
}