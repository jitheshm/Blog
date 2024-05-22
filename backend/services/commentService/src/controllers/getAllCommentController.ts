import { Request, Response } from "express";
import Comment from "../models/CommentModel";
import mongoose from "mongoose";

export default async (req: Request, res: Response) => {
    try {
        let comments = await Comment.find({postId: new mongoose.Types.ObjectId(req.params.postId)})
        res.status(200).json({ data: comments, success: true })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }
}