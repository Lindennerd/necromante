import { AMQPContext } from "../../types";

export const listQueues = async (ctx: AMQPContext) => {
  const { channel } = ctx;
  const { queue } = await channel.checkQueue("amq.direct");
  console.log(queue);
};
