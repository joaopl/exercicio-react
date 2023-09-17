import React, { useState } from 'react';

function HelloWithConditional() {
  const [showHello, setShowHello] = useState(true);

  const toggleHello = () => {
    setShowHello(!showHello);
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
      <button style={style} onClick={toggleHello}>Forma 5 - Toggle Hello</button>
      {showHello && <h4>{`Hello world - ${new Date().toLocaleString()}`}</h4>}
    </div>
  );
}

export default HelloWithConditional;