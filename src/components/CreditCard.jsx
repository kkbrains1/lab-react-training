import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let logo;
  if (type === 'Visa') {
    logo = '/img/visa.png';
  } else {
    logo = '/img/master-card.svg';
  }

  let cardNumber = number.substring(12);

  let expirationYearTrim = expirationYear.toString().substring(2);

  return (
    <div
      className="creditcard-container"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={logo} alt="card type" />
      <p className="number" > .... .... .... {cardNumber}</p>
      <p className="small-font" >
        Expires {expirationMonth}/{expirationYearTrim} &nbsp;&nbsp;&nbsp; {bank}
      </p>
      <p className="small-font" >{owner}</p>
    </div>
  );
};

export default CreditCard;
