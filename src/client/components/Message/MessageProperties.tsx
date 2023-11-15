import { ConsumeMessage } from "amqplib";
import { Collapsible } from "../base/Collapsible";
import { JsonView } from "../base/JsonView";

export const MessageProperties = ({
  properties,
}: {
  properties: ConsumeMessage["properties"];
}) => {
  return (
    <Collapsible title="Properties">
      <JsonView data={properties} />
    </Collapsible>
  );
};
