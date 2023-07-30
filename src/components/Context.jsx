import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("home");
  const [show, setShow] = useState(true);

  const controlTopbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlTopbar);
    return () => {
      window.removeEventListener("scroll", controlTopbar);
    };
  }, []);

  const value = { show, setShow, open, setOpen, selected, setSelected };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
