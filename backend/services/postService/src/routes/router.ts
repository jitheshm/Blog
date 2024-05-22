import { Router } from "express";
import authentication from "../middlewares/authentication";


const router = Router();

router.post('/api/post/create',authentication,()=>{
    console.log('create post')
})



export default router