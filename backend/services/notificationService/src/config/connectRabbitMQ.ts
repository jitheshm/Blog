
import amqp from 'amqplib'
const connectString = process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672';
import { v4 as uuidv4 } from 'uuid';
import notification from '../services/notification';

export let channel: amqp.Channel;
export let replyQueue: string;
export default async () => {
    let connection: amqp.Connection | null = null;
    let retry = 0;
    while (true) {
        try {
            const exchange = 'notification'
            connection = await amqp.connect(connectString);
            channel = await connection.createChannel()
            channel.assertExchange(exchange, 'direct', {
                durable: false
            });
            const rq = await channel.assertQueue('', { exclusive: true })
            replyQueue = rq.queue;
            const q = await channel.assertQueue('', {
                exclusive: true
            })
            channel.bindQueue(q.queue, exchange, 'blog');
            channel.consume(q.queue, async function (msg) {
                let postId = msg?.content.toString()
                console.log(postId);


                let correlationId = uuidv4()

                const consumer = await channel.consume(replyQueue, (msg) => {
                    console.log('consume')

                    if (msg?.properties.correlationId == correlationId) {
                        console.log(msg);
                        const msgObj: { emails: string[] } = JSON.parse(msg?.content.toString())
                        notification(msgObj.emails, postId as string)
                        channel.cancel(consumer.consumerTag)



                    }
                },
                    {
                        noAck: true
                    })


                channel.sendToQueue('email', Buffer.from('fetch users email'), {
                    correlationId: correlationId,
                    replyTo: replyQueue
                });


                channel.ack(msg as amqp.Message);
            }, {
                noAck: false
            });





            console.log(">>>>>>>>>>>>>>>>>>>>>RabbitMQ connected");
            break;

        } catch (error) {
            console.log(error);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>RabbitMQ connection failed");
            await new Promise(resolve => setTimeout(resolve, 5000));
            retry++;
            console.log(`Retry(${retry}) to connect to RabbitMQ`);

        }
    }
}