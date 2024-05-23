import React from 'react';
import './Button.scss'

const Button = ({ label, backgroundColor, borderColor, labelClassName, onClick, buttonClassName }) => {
    const buttonStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            className={`custom-button cursor ${buttonClassName}`}
        >
           <span className={labelClassName}>{label}</span> 
        </button>
    );
};

export default Button;
