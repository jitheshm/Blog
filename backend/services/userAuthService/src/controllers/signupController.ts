import { Request, Response } from "express";
import { hash } from 'bcryptjs';
import UserModel, { IUser } from "../models/userModel";



const saltRounds: number = 10;

export default async (req: Request, res: Response): Promise<void> => {
    try {
        let { name, email, password }: IUser = req.body
        console.log(name, email, password);
        const existUser = await UserModel.findOne({ email: email })
        if (existUser) {
            res.status(200).json({ message: 'User already exist', success: false })
            return
        }
        const encryptPassword = await hash(password, saltRounds)
        let user = new UserModel({ name, email, password: encryptPassword })
        user.save()
        res.status(200).json({ message: 'User Created Successfully', success: true })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error', success: false })
    }


}