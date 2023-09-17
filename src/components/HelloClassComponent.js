import React, { Component } from 'react';

class HelloWorldClassComponent extends Component {
  render() {
    const now = new Date().toLocaleString();
    return (
      <div>
        <p>Forma 9 - Classe - Hello world - {`Data e hora: ${now}`}</p>
      </div>
    );
  }
}

export default HelloWorldClassComponent;