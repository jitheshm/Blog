import { Router } from "express";
import signupController from "../controllers/signupController";
import signinController from "../controllers/signinController";
import tokenVerifyController from "../controllers/tokenVerifyController";
const router = Router();

router.post('/api/user/signup',signupController)
router.post('/api/user/signin',signinController)
router.get('/api/user/token/verify',tokenVerifyController)


export default router