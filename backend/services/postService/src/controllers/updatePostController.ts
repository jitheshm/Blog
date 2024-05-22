import { Request, Response } from "express";
import Post, { IPost } from "../models/PostModel";
import { IRequest } from "../middlewares/authentication";
import mongoose from "mongoose";

export default async (req: Request, res: Response) => {

    try {
        const { title, tag, content, thumbnail }: IPost = req.body;
        const userId: string = (req as IRequest).user.userId;
        const resObj = await Post.updateOne({ userId: new mongoose.Types.ObjectId(userId), _id: new mongoose.Types.ObjectId(req.params.id) }, { title, tag, content, thumbnail })
        if (resObj.modifiedCount > 0) {
            res.status(200).json({ message: 'Post updated', success: true })
        }
        else {
            res.status(404).json({ message: 'Post not found', success: false })
        }



    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'Internal server error', success: false })
    }
}