import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Hello from './components/Hello';
import HelloWithAlert from './components/HelloWithAlert';
import HelloWithConsole from './components/HelloWithConsole';
import HelloWithConditional from './components/HelloWithConditional';
import HelloWithDelay from './components/HelloWithDelay';
import HelloWithButton from './components/HelloWithButton';
import HelloWorldWithProps from './components/HelloWithProps';
import HelloWorldClassComponent from './components/HelloClassComponent';
import HellodWithForm from './components/HelloWithForm';




function App() {
  const [messages, setMessages] = useState([]);
  const ulStyle = {
    color: 'white',
    fontSize: '16px',
    listStyle: 'none',
  };

  const liStyle = {
    margin: '8px',
    background: '#666',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleString();
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Hello world', timestamp: now }
      ]);
    }, 10000);

  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello World de 10 formas diferentes</h1>
      <p>Forma 1 em lista exibindo a cada 10 segundos</p>
      <ul style={ulStyle}>
        {messages.map((message, index) => (
          <li style={liStyle} key={index}>
            {message.text} - {message.timestamp}
          </li>
        ))}
      </ul>
      <Hello></Hello>
      <HelloWithAlert></HelloWithAlert>
      <HelloWithConsole></HelloWithConsole>
      <HelloWithConditional></HelloWithConditional>
      <HelloWithDelay></HelloWithDelay>
      <HelloWithButton></HelloWithButton>
      <HelloWorldWithProps message="Hello world"></HelloWorldWithProps>
      <HelloWorldClassComponent></HelloWorldClassComponent>
      <HellodWithForm></HellodWithForm>
    </div>
  );
}

export default App;
