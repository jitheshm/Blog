import { channel } from "../config/connectRabbitMQ";
import amqp from 'amqplib'
import { fetchEmails } from "../services/userService";

export default async() => {
    let q = await channel.assertQueue('email', { durable: false })

    channel.consume('email', async (msg) => {
        console.log(msg);
        const emails = await fetchEmails()
        const obj = {
            emails
        }
        channel.sendToQueue(msg?.properties.replyTo, Buffer.from(JSON.stringify(obj)), {
            correlationId: msg?.properties.correlationId
        });


        channel.ack(msg as amqp.Message);

    }, {
        noAck: false
    })
}