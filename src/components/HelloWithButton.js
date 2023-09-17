import React, { useState } from 'react';

function HelloWithButton() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  const updateCurrentTime = () => {
    setCurrentTime(new Date().toLocaleString());
  };

  const style = {
    margin: '0',
    background: ' #2f847c',
    color: 'white',
    borderRadius: '8px',
    padding: '8px 48px',
    fontSize: '18px',
    border: 'unset',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>{`Hello world - ${currentTime}`}</h2>
      <button style={style} onClick={updateCurrentTime}>Forma 7 - Atualizar o hello a data e hora do hello world.</button>
    </div>
  );
}

export default HelloWithButton;