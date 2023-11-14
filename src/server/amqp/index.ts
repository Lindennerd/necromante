import amqplib, { ConsumeMessage } from "amqplib";
import { AMQPContext } from "../../types";
import { getQueue, getQueueInput } from "./get-queue";
import { listQueues } from "./list-queues";
import { publishMessage, publishMessageInput } from "./publish-message";

export type Action<T, K> = (ctx: AMQPContext, input?: T) => Promise<K>;

export const amqp = () => {
  console.log(process.env.VITE_RMQ_CONNECTION_STRING);
  async function withContext<T, K>(fn: Action<T, K>, input: T | undefined) {
    if (!process.env.VITE_RMQ_CONNECTION_STRING)
      throw new Error("VITE_RMQ_CONNECTION_STRING is required");

    const connection = await amqplib.connect(
      process.env.VITE_RMQ_CONNECTION_STRING
    );

    const channel = await connection.createChannel();
    const ctx = { channel, connection };

    channel.on("error", (err) => {
      console.error(err);
    });

    try {
      return await fn(ctx, input);
    } finally {
      await connection.close();
    }
  }

  return {
    listQueues: () => withContext<void, string[]>(listQueues, undefined),

    getQueue: async (input: getQueueInput): Promise<ConsumeMessage[]> => {
      const result = await withContext<getQueueInput, ConsumeMessage[]>(
        getQueue,
        input
      );
      return result;
    },

    publishMessage: (input: publishMessageInput) =>
      withContext<publishMessageInput, void>(publishMessage, input),
  };
};
