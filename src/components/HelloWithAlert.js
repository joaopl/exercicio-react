import React from 'react';

function HelloWithAlert() {
  const showAlert = () => {
    const now = new Date().toLocaleString();
    alert(`Hello world - ${now}`);
  };

  const style = {
    margin: '8px',
    background: ' #2f847c',
    color: 'white',
    borderRadius: '8px',
    padding: '8px 48px',
    fontSize: '18px',
    border: 'unset',
    cursor: 'pointer',
  };

  return <button style={style} onClick={showAlert}> Forma 3 - Alerta de Hello World</button>;
}

export default HelloWithAlert;