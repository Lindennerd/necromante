import { FaCopy } from "react-icons/fa";

export const JsonView = ({ data }: { data: any }) => {
  function handleCopy(): void {
    navigator.clipboard.writeText(JSON.stringify(data, null, 4));
  }

  return (
    <div className="p-2 text-xs bg-gray-200 rounded flex justify-between items-start">
      <pre className="">{JSON.stringify(data, null, 4)}</pre>
      <div>
        <button onClick={() => handleCopy()}>
          <FaCopy className="hover:text-gray-500" />
        </button>
      </div>
    </div>
  );
};
