import { Queue } from "../../types";
import { baseUrl } from "../constants";

export async function fetchQueue(queueName: string): Promise<Queue> {
  const response = await fetch(`${baseUrl}/queue/${queueName}`);
  return (await await response.json()) as Queue;
}

export async function fetchQueues() {
  const response = await fetch(`${baseUrl}/queue/list`);
  const data = await response.json();
  return data as string[];
}

export function withFilter(queue: Queue, filter: string | null): Queue {
  if (!filter || !filter.length) return queue;
  const filteredMessages = queue.messages.filter((message) =>
    message.content.includes(filter)
  );
  return { messages: filteredMessages };
}

export async function publishMessage(queue: string, message: string) {
  const response = await fetch(`${baseUrl}/queue/${queue}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data;
}
