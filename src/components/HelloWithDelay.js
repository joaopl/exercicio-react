import React, { useState, useEffect } from 'react';

function HelloWithDelay() {
  const [showHello, setShowHello] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowHello(true);
      setCurrentTime(new Date().toLocaleString());
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {showHello && <h3>Forma 6 - com delay - {`Hello world - ${currentTime}`}</h3>}
    </div>
  );
}

export default HelloWithDelay;