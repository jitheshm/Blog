import { Router } from "express";
import authentication from "../middlewares/authentication";
import addCommentController from "../controllers/addCommentController";

const router = Router();

router.post('/api/comments/posts/:postId', authentication, addCommentController)


export default router