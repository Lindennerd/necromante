import amqplib from "amqplib";
import { AMQPContext } from "../../types";
import { getQueue, getQueueInput } from "./get-queue";
import { listQueues } from "./list-queues";
import { publishMessage, publishMessageInput } from "./publish-message";

export type Action<T, K> = (ctx: AMQPContext, input?: T) => Promise<K | void>;

export const amqp = () => {
  const connectionString = process.env.RMQ_CONNECTION_STRING;

  async function withContext<T, K>(fn: Action<T, K>, input: T | undefined) {
    if (!connectionString) throw new Error("RMQ_CONNECTION_STRING is required");

    const connection = await amqplib.connect(connectionString);
    const channel = await connection.createChannel();
    const ctx = { channel, connection };
    try {
      await fn(ctx, input);
    } finally {
      await connection.close();
    }
  }

  return {
    listQueues: () => withContext<void, void>(listQueues, undefined),

    getQueue: (input: getQueueInput) =>
      withContext<getQueueInput, void>(getQueue, input),

    publishMessage: (input: publishMessageInput) =>
      withContext<publishMessageInput, void>(publishMessage, input),
  };
};
