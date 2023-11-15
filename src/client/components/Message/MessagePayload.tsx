import { JsonView } from "../base/JsonView";

export const MessagePayload = ({ payload }: { payload: string }) => {
  return (
    <div>
      <div className="text-xl p-2">Payload</div>
      <JsonView data={JSON.parse(payload)} />
    </div>
  );
};
