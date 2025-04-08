"use client";

import { useState } from "react";

const WorkspaceFooter = () => {
  const [message, setMessage] = useState("Ask your question here");

  return (
    <div className="grid h-64 w-full grid-cols-[1fr_56px] font-serif">
      <textarea
        className="h-full w-full resize-none bg-[var(--foreground)] p-4 text-[var(--background)] outline-none"
        value={message}
        onFocus={() => {
          if (message === "Ask your question here") setMessage("");
        }}
        onBlur={() => {
          if (!message.trim()) setMessage("Ask your question here");
        }}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="flex h-full items-start justify-center border-l-2 border-[var(--background)] bg-[var(--gridground)] pt-8 text-[var(--background)] outline-none hover:bg-[var(--background)] hover:text-[var(--foreground)]">
        <span className="rotate-90 font-serif text-2xl font-extrabold">
          Send
        </span>
      </button>
    </div>
  );
};

export default WorkspaceFooter;
