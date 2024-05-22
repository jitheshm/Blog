import { Router } from "express";
import signupController from "../controllers/signupController";
import signinController from "../controllers/signinController";
import tokenVerifyController from "../controllers/tokenVerifyController";
const router = Router();

router.post('/api/users/signup',signupController)
router.post('/api/users/signin',signinController)
router.get('/api/users/token/verify',tokenVerifyController)


export default router