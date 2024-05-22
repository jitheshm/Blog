
import amqp from 'amqplib'
const connectString = process.env.RABBITMQ_URL || 'amqp://localhost';

export let channel: amqp.Channel;
export let replyQueue: string;
export default async () => {
    let connection: amqp.Connection | null = null;

    try {

        connection = await amqp.connect(connectString);
        channel = await connection.createChannel()
        let q = await channel.assertQueue('', { exclusive: true })
        replyQueue = q.queue;

        console.log("RabbitMQ connected");


    } catch (error) {
        console.log(error);
        console.log("RabbitMQ connection failed");
        if (connection) connection.close()
        process.exit(0)

    }
}