import { baseUrl } from "../constants";

export const usePublish = () => {
  return {
    async publish(queue: string, message: string) {
      const response = await fetch(`${baseUrl}/queue/${queue}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      return data;
    },
  };
};
