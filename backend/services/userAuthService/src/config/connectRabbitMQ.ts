
import amqp from 'amqplib'
import authService from '../services/authService';
const connectString = process.env.RABBITMQ_URL || 'amqp://rabbitmq:5672';

export let channel: amqp.Channel;
export default async () => {
    let connection: amqp.Connection | null = null;
    let retry = 0;
    while (retry < 10) {
        try {

            connection = await amqp.connect(connectString);
            channel = await connection.createChannel()
            let q = await channel.assertQueue('auth', { durable: false })
            channel.prefetch(1);

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

            },{
                noAck: false
              })

            console.log("RabbitMQ connected");
            break;


        } catch (error) {
            console.log(error);
            console.log("RabbitMQ connection failed")
            await new Promise(resolve => setTimeout(resolve, 5000));
            retry++;
            console.log(`Retry(${retry}) to connect to RabbitMQ`);

        }
    }
}