"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button2";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ handleClose }) => {
  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat();

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "1",
          role: "system",
          content: "Hei, noen spørsmål om vår tjeneste?",
        },
      ]);
    }
  }, [messages, setMessages]);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      onClick={handleClose}
    >
      <motion.div
        className="relative w-[600px] h-[600px] max-w-[600px] max-h-[600px] bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden"
        variants={modal}
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside it
      >
        <header className="bg-gray-900 dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/logo.png" />
              <AvatarFallback>dD</AvatarFallback>
            </Avatar>
            <h3 className="text-white dark:text-gray-50 text-sm font-medium">
              FjordDev BOT
            </h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white dark:text-gray-50"
            onClick={handleClose}
          >
            <XIcon className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </Button>
        </header>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`whitespace-pre-wrap ${
                m.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {m.content}
              </span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="p-2">
          <input
            className="w-full p-2 border border-gray-300 rounded shadow-xl text-gray-600"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </motion.div>
    </motion.div>
  );
};

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default Modal;
