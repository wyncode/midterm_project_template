import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ContextDemo = () => {
  const { contextMessage, contextMethod } = useContext(AppContext);

  contextMethod();

  return <h3>{contextMessage}</h3>;
};

export default ContextDemo;
