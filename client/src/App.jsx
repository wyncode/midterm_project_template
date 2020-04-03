import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div id="demo">
      <h1>Hello from client/src/App.js</h1>
      <h1>{serverMessage}</h1>
    </div>
  );
};

export default App;
