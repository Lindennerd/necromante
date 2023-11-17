import { publishMessage } from "../store/functions";

export const usePublish = () => {
  return {
    async publish(queue: string, message: string) {
      return await publishMessage(queue, message);
    },
  };
};
