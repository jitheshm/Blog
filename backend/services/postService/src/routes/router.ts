import { Router } from "express";
import authentication from "../middlewares/authentication";
import createController from "../controllers/createController";
import getPostController from "../controllers/getPostController";
import updatePostController from "../controllers/updatePostController";
import deletePostController from "../controllers/deletePostController";
import getAllPostController from "../controllers/getAllPostController";
import getSpecificPostController from "../controllers/getSpecificPostController";


const router = Router();

router.post('/api/posts', authentication, createController)
router.get('/api/posts/edit/:id', authentication, getPostController)
router.patch('/api/posts/:id', authentication, updatePostController)
router.delete('/api/posts/:id', authentication, deletePostController)
router.get('/api/posts/', getAllPostController)
router.get('/api/posts/:id', getSpecificPostController)



export default router