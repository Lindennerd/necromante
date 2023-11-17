import { atom } from "jotai";
import { Queue } from "../../types";
import { fetchQueue, fetchQueues, withFilter } from "./functions";

export const currentQueueStore = atom<string | null>(null);
export const filterStore = atom<string | null>(null);

export const listQueuesStore = atom<Promise<string[]>>(async (get) => {
  return await fetchQueues();
});

export const messagesStore = atom<Promise<Queue>>(async (get) => {
  const queueName = get(currentQueueStore);
  const filter = get(filterStore);

  if (!queueName) return { messages: [] };
  const queue = await fetchQueue(queueName);
  return withFilter(queue, filter);
});
