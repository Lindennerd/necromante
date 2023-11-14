import { AMQPContext } from "../../types";

export const listQueues = async (ctx: AMQPContext) => {
  return ["queue1", "queue2", "queue3"];
};
