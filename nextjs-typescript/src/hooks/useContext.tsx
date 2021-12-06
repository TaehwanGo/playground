import React, { createContext } from "react";

const Context = createContext({
  isShown: false,
});

type ChildrenNode = {
  children: React.ReactChild;
};

const useContext = ({ children }: ChildrenNode) => {
  return (
    <Context.Provider value={{ isShown: false }}>{children}</Context.Provider>
  );
};
