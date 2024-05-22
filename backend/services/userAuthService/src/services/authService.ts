import { verify } from "jsonwebtoken";

export default (token: string) => {
    const JWT_SECRET = 'userauthsecretkey';
    try {
        const decoded = verify(token, JWT_SECRET);
        return decoded
    } catch (err) {
        console.log(err,"error in verify token");

    }
}