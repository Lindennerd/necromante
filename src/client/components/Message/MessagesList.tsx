import { useAtom } from "jotai";
import { MessageView } from ".";
import { messagesStore } from "../../store/necromante.store";

export const MessagesList = () => {
  const [queue] = useAtom(messagesStore);

  return (
    <div className="flex flex-col w-full gap-2">
      {queue &&
        queue.messages.map((message, index) => (
          <MessageView key={index} message={message} />
        ))}
    </div>
  );
};
