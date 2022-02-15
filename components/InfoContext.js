import { createContext, useCallback, useState } from "react";

const initialState = {
  entries: [
    {
      nom: "",
      prénom: "",
      ville: "",
      adresse: "",
      Âge: "",
    },
  ],
};

const InfoContext = createContext({});

export const InfoContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  const addEntry = useCallback((item) => {
    setState((currentState) => ({
      ...currentState,
      entries: [...currentState.entries, item],
    }));
  }, []);

  return (
    <InfoContext.Provider
      {...props}
      value={{ entries: state.entries, addEntry }}
    />
  );
};

export default InfoContext;
