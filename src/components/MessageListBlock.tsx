"use client";

import { FiMessageSquare } from "react-icons/fi";
import Block from "./Block";

const MessageListBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Have a message for me?</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Write your message"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
        >
          <FiMessageSquare />
          Send a message
        </button>
      </form>
    </Block>
  );
};

export default MessageListBlock;
