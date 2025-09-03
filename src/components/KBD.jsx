import React from "react";

export default function KBD({ text, className }) {
  return (
    <kbd
      className={`pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ${className}`}
    >
      <span className="text-xs">⌘</span>
      {text}
    </kbd>
  );
}
