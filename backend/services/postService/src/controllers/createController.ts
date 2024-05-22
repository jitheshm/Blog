import { Request, Response } from "express";
import Post, { IPost } from "../models/PostModel";
import { IRequest } from "../middlewares/authentication";

export default async (req: Request, res: Response) => {
    try {
        const { title, tag, content, thumbnail }: IPost = req.body;
        const userId: string = (req as IRequest).user.userId;

        const post = new Post({
            title,
            tag,
            content,
            thumbnail,
            userId
        });

        await post.save()
        res.status(200).json({ message: 'Post created', success: true })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }

}