import { NextFunction, Request, Response } from "express";
import { channel, replyQueue } from "../config/connectRabbitMQ";
import { v4 as uuidv4 } from 'uuid';

interface IRequest extends Request {
    user?: any; // Adjust the type according to what you expect user to be
}

interface Iuser {
    userId: string,
    email: string,
    name: string,
    iat: number,
    exp: number
}

export default async (req: IRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']
    if (!token) {
        res.status(401).json({ message: 'Unauthorize', success: false })
        return
    }
    var correlationId = uuidv4()

    //here create new consumer for each request to listen for the response , we can create single consumer for consume all request is more efficient

    const consumer = await channel.consume(replyQueue, (msg) => {
        console.log('consume')

        if (msg?.properties.correlationId == correlationId) {
            console.log(' [.] Got %s', msg?.content.toString());
            let decodedData:Iuser = JSON.parse(msg?.content.toString())
            console.log(decodedData);

            if (decodedData) {
                req.user = decodedData
                console.log(decodedData.name);

                channel.cancel(consumer.consumerTag)
                next()
            } else {
                channel.cancel(consumer.consumerTag)
                res.status(401).json({ message: 'Unauthorize', success: false })

            }


        }
    },
        {
            noAck: true
        })

    channel.sendToQueue('auth', Buffer.from(token), {
        correlationId: correlationId,
        replyTo: replyQueue
    });


}