import React from 'react';

function HelloWorldWithProps(props) {
    const now = new Date().toLocaleString();
    return (
        <div>
          <h5>Forma 8 - Props - {props.message} - {`Data e hora: ${now}`}</h5>
        </div>
      );
}

export default HelloWorldWithProps;