import { Request, Response } from "express";
import authService from "../services/authService";

export default (req: Request, res: Response) => {
    if (req.headers.authorization) {
        const data = authService(req.headers.authorization)
        if (data) {
            res.status(200).json({ message: 'Authorized', success: true, data: data })
        } else {
            res.status(401).json({ message: 'Unauthorized', success: false })
        }
    }else{
        res.status(401).json({ message: 'Unauthorized', success: false })
    }
}