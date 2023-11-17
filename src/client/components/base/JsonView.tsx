import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

export const JsonView = ({ data }: { data: any }) => {
  const [copy, setCopy] = useState(false);

  function handleCopy(): void {
    navigator.clipboard.writeText(JSON.stringify(data, null, 4));
    setCopy(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [copy]);

  return (
    <div className="p-2 text-xs bg-purple-300 rounded flex justify-between items-start">
      <pre className="">{JSON.stringify(data, null, 4)}</pre>
      <div>
        <button onClick={() => handleCopy()} className="flex gap-2">
          <span className="text-purple-500"> {copy ? "Copied" : ""}</span>
          <FaCopy className="hover:text-purple-700 text-purple-500 mt-1" />
        </button>
      </div>
    </div>
  );
};
