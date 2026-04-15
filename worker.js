const amqp = require('amqplib');

async function startWorker() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://rabbitmq');
    const channel = await connection.createChannel();

    await channel.assertQueue('login_queue', { durable: true });
    console.log('Worker is waiting for messages on login_queue...');

    channel.consume(
      'login_queue',
      (msg) => {
        if (!msg) return;

        const data = JSON.parse(msg.content.toString());
        console.log('Processing login message:', data);

        // TODO: Add your worker logic here (e.g. audit login, sync analytics, notify other service)

        channel.ack(msg);
      },
      { noAck: false }
    );
  } catch (error) {
    console.error('RabbitMQ worker error:', error);
    process.exit(1);
  }
}

startWorker();
