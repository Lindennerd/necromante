import { useAtom } from "jotai";
import { MessageView } from ".";
import { messagesStore } from "../../store/necromante.store";

export const MessagesList = () => {
  const [queue] = useAtom(messagesStore);

  if (!queue || !queue.messages.length)
    return (
      <div className="flex justify-center w-full bg-purple-200 p-8 rounded text-xl font-thin">
        <span>Selecione alguma fila para visualizar</span>
      </div>
    );

  return (
    <div className="flex flex-col w-full gap-2">
      {queue &&
        queue.messages.map((message, index) => (
          <MessageView key={index} message={message} />
        ))}
    </div>
  );
};
