import { Router } from "express";
import authentication from "../middlewares/authentication";
import createController from "../controllers/createController";
import getPostController from "../controllers/getPostController";


const router = Router();

router.post('/api/posts',authentication,createController)
router.get('/api/posts/postid/:id',authentication,getPostController)



export default router