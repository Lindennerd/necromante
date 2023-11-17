import { Message } from "../../../types";
import { MessageFields } from "./MessageFields";
import { MessagePayload } from "./MessagePayload";
import { MessageProperties } from "./MessageProperties";
import { RessucitateButton } from "./RessucitateButton";

export const MessageView = ({ message }: { message: Message }) => {
  return (
    <div className="space-y-2 rounded bg-purple-200 p-2">
      <RessucitateButton message={message} />
      <MessagePayload payload={message.content} />
      <MessageFields fields={message.fields} />
      <MessageProperties properties={message.properties} />
    </div>
  );
};
