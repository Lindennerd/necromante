import { useAtom } from "jotai";
import { Message } from "../../../types";
import { usePublish } from "../../hooks/usePublish";
import { currentQueueStore } from "../../store/necromante.store";
import { MessageFields } from "./MessageFields";
import { MessagePayload } from "./MessagePayload";
import { MessageProperties } from "./MessageProperties";

export const MessageView = ({ message }: { message: Message }) => {
  const { publish } = usePublish();
  const [currentQueue] = useAtom(currentQueueStore);

  async function handleRessusitate() {
    await publish(currentQueue!, message.content);
  }

  return (
    <div className="space-y-2 rounded bg-white p-2">
      <div className="flex justify-end w-full">
        <button
          className="bg-gray-200 rounded hover:bg-gray-400 px-2"
          onClick={(e) => handleRessusitate()}
        >
          Ressucitar
        </button>
      </div>
      <MessagePayload payload={message.content} />
      <MessageFields fields={message.fields} />
      <MessageProperties properties={message.properties} />
    </div>
  );
};
