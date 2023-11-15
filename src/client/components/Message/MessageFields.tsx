import { ConsumeMessageFields } from "amqplib";
import { Collapsible } from "../base/Collapsible";
import { JsonView } from "../base/JsonView";

export const MessageFields = ({ fields }: { fields: ConsumeMessageFields }) => {
  return (
    <Collapsible title="Fields">
      <JsonView data={fields} />
    </Collapsible>
  );
};
