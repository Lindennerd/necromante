import React from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  let bgColor;

  switch (type) {
    case "success":
      bgColor = "bg-green-500";
      break;
    case "error":
      bgColor = "bg-red-500";
      break;
    case "info":
    default:
      bgColor = "bg-purple-700";
      break;
  }

  return (
    <div className={`p-4 text-white fixed right-5 top-5 rounded-md ${bgColor}`}>
      {message}
    </div>
  );
};

export default Toast;
