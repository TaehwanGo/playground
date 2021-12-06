import React, { createContext } from "react";

export const Context = createContext({
  isShown: true,
});

type ChildrenNode = {
  children: React.ReactChild;
};

export const ContextProvider = ({ children }: ChildrenNode) => {
  return (
    <Context.Provider value={{ isShown: true }}>{children}</Context.Provider>
  );
};
