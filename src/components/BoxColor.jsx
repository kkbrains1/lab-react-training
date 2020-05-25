import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const { r, g, b } = props;
  let color = 'rgb('.concat(r, ', ', g, ', ', b, ')');
  let fontColor;
  if (r > 100 || b > 100) {
    fontColor = 'white';
  }

  const hexConvert = function (r, g, b) {
    const rgbToHex = (number) => {
      let rgb = Number(number).toString(16);
      if (rgb.length < 2) {
        rgb = '0' + rgb;
      }
      return rgb;
    };
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return '#' + red + green + blue;
  };

  let hexCode = hexConvert(r, g, b);

  return (
    <div
      className="boxcolor-container"
      style={{ backgroundColor: color, color: fontColor }}
    >
      <div className="boxcolor-text" >
      <p>{color}</p>
      <p>{hexCode}</p>
      </div>
    </div>
  );
};

export default BoxColor;
