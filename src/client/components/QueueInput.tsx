import { useAtom } from "jotai";
import { listQueuesStore } from "../store/necromante.store";

export interface QueueInputProps {
  queue: string;
  setQueue: (queue: string) => void;
}

export const QueueInput = (props: QueueInputProps) => {
  const [listQueues] = useAtom(listQueuesStore);

  return (
    <>
      <input
        value={props.queue}
        onChange={(e) => props.setQueue(e.target.value)}
        list="queues"
        type="text"
        className="w-full outline-none border rounded p-2 border-gray-200"
      />

      <datalist id="queues">
        {listQueues.map((queue, index) => (
          <option key={index} value={queue} />
        ))}
      </datalist>
    </>
  );
};
