import { atom } from "jotai";
import { Message } from "../../types";
import { baseUrl } from "../constants";

export type Queue = {
  messages: Message[];
};

async function fetchQueue(queueName: string): Promise<Queue> {
  const response = await fetch(`${baseUrl}/queue/${queueName}`);
  return (await await response.json()) as Queue;
}

function withFilter(queue: Queue, filter: string | null): Queue {
  if (!filter || !filter.length) return queue;
  const filteredMessages = queue.messages.filter((message) =>
    message.content.includes(filter)
  );
  return { messages: filteredMessages };
}

export const currentQueueStore = atom<string | null>(null);
export const filterStore = atom<string | null>(null);

export const listQueuesStore = atom<Promise<string[]>>(async (get) => {
  const response = await fetch(`${baseUrl}/queue/list`);
  const data = await response.json();
  return data as string[];
});

export const messagesStore = atom<Promise<Queue>>(async (get) => {
  const queueName = get(currentQueueStore);
  const filter = get(filterStore);

  if (!queueName) return { messages: [] };
  const queue = await fetchQueue(queueName);
  return withFilter(queue, filter);
});
