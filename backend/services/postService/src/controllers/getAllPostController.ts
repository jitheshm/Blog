import { Request, Response } from "express";
import Post from "../models/PostModel";

export default async (req: Request, res: Response) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({ data: posts, success: true })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }
}