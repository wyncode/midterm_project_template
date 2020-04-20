import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');

  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

  return (
    <AppContext.Provider
      value={{
        contextMessage,
        contextMethod
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
