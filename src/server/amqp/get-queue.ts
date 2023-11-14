import { AMQPContext } from "../../types";

export type getQueueInput = { queueName: string } | undefined;

export const getQueue = async (ctx: AMQPContext, queue: getQueueInput) => {
  if (!queue) throw new Error("Queue name is required");
  if (!queue.queueName) throw new Error("Queue name is required");

  const { channel } = ctx;
  const { queueName } = queue;

  await channel.bindQueue(queueName, "amq.direct", queueName);
  channel.consume(queueName, (msg) => {
    if (msg) {
      console.log(msg.content.toString());
    }
  });
};
