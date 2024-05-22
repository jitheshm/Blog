import { Router } from "express";
import authentication from "../middlewares/authentication";
import createController from "../controllers/createController";


const router = Router();

router.post('/api/posts',authentication,createController)




export default router