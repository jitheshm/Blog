import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Comment Service is up and running')
})

export default router