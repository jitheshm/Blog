import { channel } from "../config/connectRabbitMQ";
import authService from "../services/authService";
import amqp from 'amqplib'

export default async () => {
    let q = await channel.assertQueue('auth', { durable: false })

    channel.consume('auth', (msg) => {
        console.log(msg);

        let token = msg?.content.toString()
        if (token) {

            const decode = authService(token)
            console.log(decode);

            if (decode) {
                channel.sendToQueue(msg?.properties.replyTo, Buffer.from(JSON.stringify(decode)), {
                    correlationId: msg?.properties.correlationId
                });
            } else {
                channel.sendToQueue(msg?.properties.replyTo, Buffer.from(''), {
                    correlationId: msg?.properties.correlationId
                });

            }

        }
        channel.ack(msg as amqp.Message);

    }, {
        noAck: false
    })
}