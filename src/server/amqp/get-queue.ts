import { type ConsumeMessage } from "amqplib";
import { AMQPContext } from "../../types";

export type getQueueInput = { queueName: string } | undefined;

export const getQueue = async (
  ctx: AMQPContext,
  queue: getQueueInput
): Promise<ConsumeMessage[]> => {
  if (!queue) throw new Error("Queue name is required");
  if (!queue.queueName) throw new Error("Queue name is required");

  const messages: ConsumeMessage[] = [];

  const { channel } = ctx;
  const { queueName } = queue;

  await channel.bindQueue(queueName, "amq.direct", queueName);
  await channel.consume(queueName, (msg) => {
    if (msg) messages.push(msg);
  });

  return messages;
};
