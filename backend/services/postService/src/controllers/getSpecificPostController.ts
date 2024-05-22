import { Request, Response } from "express";
import Post from "../models/PostModel";

export default async (req: Request, res: Response) => {
    try {
        let postId = req.params.id
        let post = await Post.findById(postId)
        res.status(200).json({ data: post, success: true })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }
}