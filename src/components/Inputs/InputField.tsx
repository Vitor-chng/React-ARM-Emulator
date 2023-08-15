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
            <textarea
            value={input}
            className='Input'
            placeholder='Istructions Field'
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            cols={5}
            />
        </div>
    );
};

export default InputField;