import { Router } from "express";
import authentication from "../middlewares/authentication";
import createController from "../controllers/createController";


const router = Router();

router.post('/api/post/create',authentication,createController)



export default router