import React from "react";
import { motion } from "framer-motion";

interface NoticeProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
}

const Notice: React.FC<NoticeProps> = ({ message, type = "info" }) => {
  const baseClasses = "rounded-md p-4 mb-4";
  const typeClasses = {
    info: "bg-blue-50 text-blue-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-yellow-50 text-yellow-700",
    error: "bg-red-50 text-red-700",
  };

  return (
    <motion.div
      className={`${baseClasses} ${typeClasses[type]}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {message}
    </motion.div>
  );
};

export default Notice;
