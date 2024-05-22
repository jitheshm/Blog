import { Router } from "express";
import authentication from "../middlewares/authentication";
import createController from "../controllers/createController";
import getPostController from "../controllers/getPostController";
import updatePostController from "../controllers/updatePostController";
import deletePostController from "../controllers/deletePostController";
import getAllPostController from "../controllers/getAllPostController";


const router = Router();

router.post('/api/posts', authentication, createController)
router.get('/api/posts/edit/postid/:id', authentication, getPostController)
router.patch('/api/posts/postid/:id', authentication, updatePostController)
router.delete('/api/posts/postid/:id', authentication, deletePostController)
router.get('/api/posts/', getAllPostController)



export default router