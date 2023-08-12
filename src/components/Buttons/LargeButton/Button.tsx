import React from 'react';
import { IButtonProps } from '../../../interfaces/Interfaces';


import './styles.scss';

const Button: React.FC<IButtonProps> = ({ text, submit = false, onClick, color = '#C5FFFF', style }) => {
    return (
        <button className='Button' type={(submit) ? 'submit' : 'button'} onClick={onClick} style={(style) ? style : { 'backgroundColor': color, style } as React.CSSProperties} >
            {text}
        </button>
    )
}

export default Button;