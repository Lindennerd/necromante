import { AMQPContext } from "../../types";

export type publishMessageInput =
  | {
      queueName: string;
      message: string;
    }
  | undefined;

export const publishMessage = async (
  ctx: AMQPContext,
  input: publishMessageInput
) => {
  if (!input) throw new Error("Queue name and message are required");
  if (!input.queueName) throw new Error("Queue name is required");
  if (!input.message) throw new Error("Message is required");

  const { channel } = ctx;
  const { queueName, message } = input;

  await channel.assertQueue(queueName);
  channel.sendToQueue(queueName, Buffer.from(message));
};
