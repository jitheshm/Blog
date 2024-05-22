import { Request, Response } from "express"
import { IRequest } from "../middlewares/authentication"
import Comment, { IComment } from "../models/CommentModel"

export default async (req: Request, res: Response) => {
    try {
        let postId = req.params.postId
        let userId = (req as IRequest).user.userId
        let comment = new Comment({
            userId,
            postId,
            comment: (req.body as IComment).comment 
        })
        comment.save()
        res.status(200).json({ message: 'Comment added', success: true })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false })
    }
}