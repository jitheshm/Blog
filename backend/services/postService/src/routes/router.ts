import { Router } from "express";


const router = Router();

router.post('/api/post/create',()=>{
    console.log('create post')
})



export default router