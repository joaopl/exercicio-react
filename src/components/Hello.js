import React from 'react';

function Hello() {
  const now = new Date().toLocaleString();
  return <div>Forma 2 função simples de exibição - {`Hello world - ${now}`}</div>;
}

export default Hello;