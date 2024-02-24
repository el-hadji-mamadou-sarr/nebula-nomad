"use client";
import { TerminalContextProvider, ReactTerminal } from "react-terminal";

export const Terminal = () => {
  const commands = {
    whoami: "jackharper",
    cd: (directory: any) => `changed path to ${directory}`,
  };
  return (
    <TerminalContextProvider>
      <div className="w-full h-screen">
        <ReactTerminal commands={commands} />
      </div>
    </TerminalContextProvider>
  );
};
