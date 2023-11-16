import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Collapsible = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-purple-300 rounded">
      <div
        className="flex justify-between items-center p-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="text-xl">{title}</div>
        <div className="text-xl">
          {open ? (
            <FaChevronUp className="text-purple-500" />
          ) : (
            <FaChevronDown className="text-purple-500" />
          )}
        </div>
      </div>
      {open && <div className="p-2">{children}</div>}
    </div>
  );
};
