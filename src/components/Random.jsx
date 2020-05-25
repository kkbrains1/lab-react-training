import React from 'react';
import './Random.css'

const Random = (props) => {
  let { min, max } = props;
  let result = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className="random-container">
      <p>
        Random value between {min} and {max} => {result}
      </p>
    </div>
  );
};

export default Random;
