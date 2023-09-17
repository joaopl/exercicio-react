import React, { useState } from 'react';

function HellodWithForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${name}!`);
  };

  const style = {
    height: '40px',
    fontSize: '18px',
    color: '#666',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '0 12px',
  };

  const buttoStyle = {
    margin: '0',
    background: ' #2f847c',
    color: 'white',
    borderRadius: '8px',
    padding: '0 48px',
    height: '40px',
    fontSize: '18px',
    border: 'unset',
    cursor: 'pointer',
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={style}
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button style={buttoStyle} type="submit">Enviar</button>
      </form>
      <p>Forma 10 - formulário - {message} - {`Data e hora: ${new Date().toLocaleString()}`}</p>
    </div>
  );
}

export default HellodWithForm;