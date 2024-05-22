import { Router } from "express";
import authentication from "../middlewares/authentication";
import addCommentController from "../controllers/addCommentController";
import deleteCommentController from "../controllers/deleteCommentController";
import getAllCommentController from "../controllers/getAllCommentController";

const router = Router();

router.post('/api/comments/posts/:postId', authentication, addCommentController)
router.delete('/api/comments/:id', authentication, deleteCommentController)
router.get('/api/comments/posts/:postId', getAllCommentController)


export default router