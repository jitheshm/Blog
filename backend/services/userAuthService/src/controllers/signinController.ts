import { Request, Response } from "express";
import UserModel from "../models/userModel";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface User {
    email: string;
    password: string;
}

const JWT_SECRET = 'userauthsecretkey';

export default async (req: Request, res: Response) => {
    const { email, password }: User = req.body
    let user = await UserModel.findOne({ email: email })
    if (user) {
        let status = await compare(password, user.password)
        if (status) {
            const token = sign(
                { userId: user._id, email: user.email, name: user.name },
                JWT_SECRET,
                { expiresIn: '3h' } // Token expiration time
            );
            res.status(200).json({ message: 'User Logged in Successfully', success: true, token: token,name:user.name })
        } else {
            res.status(400).json({ message: 'Invalid email or password', success: false })
        }
    }

}