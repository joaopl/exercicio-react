import React from 'react';

function HelloWithConsole() {
  const logHello = () => {
    const now = new Date().toLocaleString();
    console.log(`Hello world - ${now}`);
  };

  const style = {
    margin: '12px',
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
      <button style={style} onClick={logHello}>Forma 4 - Log Hello</button>
    </div>
  );
}

export default HelloWithConsole;