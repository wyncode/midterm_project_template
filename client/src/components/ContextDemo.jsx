import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ContextDemo = () => {
  const { contextMessage, contextMethod } = useContext(AppContext);

  contextMethod();

  return <h1>{contextMessage}</h1>;
};

export default ContextDemo;
