import React, { SetStateAction, useState } from 'react';
import { theme } from '../../styles/ColorTheme';

import './styles.scss';

interface Props {
    input: string;
    setInput: (value: SetStateAction<string>) => void;
}

const InputField: React.FC<Props> = ({ input, setInput }) => {
    const colors = theme.colors

    return (
        <div className='InputContainer'>
            <input
                value={input}
                type={"text"}
                className='Input'
                placeholder='Istructions Field'
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default InputField;