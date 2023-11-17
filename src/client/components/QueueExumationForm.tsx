import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import { currentQueueStore, listQueuesStore } from "../store/necromante.store";
import { QueueInput } from "./QueueInput";

export const QueueExumationForm = () => {
  const [listQueues] = useAtom(listQueuesStore);
  const [_, setCurrentQueue] = useAtom(currentQueueStore);

  const [queue, setQueue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setCurrentQueue(queue);
  }

  return (
    <form className="flex-1 flex gap-2 w-full" onSubmit={handleSubmit}>
      <QueueInput queue={queue} setQueue={setQueue} />
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
