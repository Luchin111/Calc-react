import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
const Button = ({type,text,clickHandler}) => (
        <button className={type} onClick={()=>{clickHandler(text)}}>
            <span>{text}</span>
        </button>
)
Button.prototypes = {
    text: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}
export default Button;