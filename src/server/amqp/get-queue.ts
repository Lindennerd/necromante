import { AMQPContext, Message } from "../../types";

export type getQueueInput = { queueName: string } | undefined;

export const getQueue = async (
  ctx: AMQPContext,
  queue: getQueueInput
): Promise<Message[]> => {
  if (!queue) throw new Error("Queue name is required");
  if (!queue.queueName) throw new Error("Queue name is required");

  const messages: Message[] = [];

  const { channel } = ctx;
  const { queueName } = queue;

  await channel.bindQueue(queueName, "amq.direct", queueName);
  await channel.consume(queueName, (msg) => {
    if (msg)
      messages.push({
        fields: msg.fields,
        properties: msg.properties,
        content: msg.content.toString(),
      });
  });

  return messages;
};
