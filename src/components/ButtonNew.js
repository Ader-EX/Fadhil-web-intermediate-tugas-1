import React from 'react';

const CustomButton = ({
  text,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}) => {
  const buttonStyles = `
    bg-${bgColor} 
    text-${textColor} 
    hover:bg-${hoverBgColor} 
    hover:text-${hoverTextColor}
    rounded-md
    px-4
    py-2
    transition
  `;

  return <button className={buttonStyles}>{text}</button>;
};

export default CustomButton;
