import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let greeting;
  switch(props.lang) {
    case('de'):
      greeting = 'Hallo ';
      break;
    case('en'):
      greeting = 'Hiya ';
      break;
    case('es'):
      greeting = 'Hola';
      break;
    case('fr'):
      greeting = 'Salut';
      break;
    default:
      greeting = 'Hallootjes'
  }
  return (

    <div className="greetings-container" >
      <p>{greeting} {props.children}</p>
    </div>
  );
};

export default Greetings;


