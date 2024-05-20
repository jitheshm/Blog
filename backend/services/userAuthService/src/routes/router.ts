import { Router } from "express";
import signupController from "../controllers/signupController";
import signinController from "../controllers/signinController";
const router = Router();

router.post('/api/user/signup',signupController)
router.post('/api/user/signin',signinController)


export default router