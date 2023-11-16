import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import { currentQueueStore, listQueuesStore } from "../store/necromante.store";

export const QueueInput = () => {
  const [listQueues] = useAtom(listQueuesStore);
  const [_, setCurrentQueue] = useAtom(currentQueueStore);

  const [queue, setQueue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setCurrentQueue(queue);
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={queue}
        onChange={(e) => setQueue(e.target.value)}
        list="queues"
        type="text"
        className="outline-none border rounded p-2 border-gray-200"
      />
      <button
        type="submit"
        className="p-2 bg-purple-200 rounded hover:bg-purple-400"
      >
        Exumar
      </button>

      <datalist id="queues">
        {listQueues.map((queue, index) => (
          <option key={index} value={queue} />
        ))}
      </datalist>
    </form>
  );
};
