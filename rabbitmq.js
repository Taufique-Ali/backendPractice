const amqp = require('amqplib');

let channel;

async function connectQueue() {
  if (channel) return channel;

  const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://rabbitmq');
  channel = await connection.createChannel();
  await channel.assertQueue('login_queue', { durable: true });
  return channel;
}

async function sendToQueue(queue, data) {
  const ch = await connectQueue();
  ch.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });
}

module.exports = {
  connectQueue,
  sendToQueue,
};
