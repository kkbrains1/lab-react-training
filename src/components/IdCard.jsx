import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idcard-container">
      <img src={picture} alt="profile" />
      <ul>
        <li><strong>First Name: </strong> {firstName} </li>
        <li><strong>Last Name: </strong> {lastName} </li>
        <li><strong>Gender: </strong> {gender} </li>
        <li><strong>Height: </strong> {height} </li>
        <li><strong>Birth: </strong> {birth.toDateString()} </li>
      </ul>
    </div>
  );
};

export default IdCard;
