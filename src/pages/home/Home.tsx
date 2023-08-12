import React, { useEffect, useState } from 'react';
import Button from '../../components/Buttons/LargeButton/Button';
import Table from '../../components/Tables/Table';
import InputField from '../../components/Inputs/Input';
import { IIBranchExchange, IInstructionFormat, TableDict } from '../../interfaces/Interfaces';

import { theme } from '../../styles/ColorTheme';



import './styles.scss';
import { TranslatorService } from '../../services/Translator/Translator';


const Home: React.FC = () => {
    const t = new TranslatorService
    const [tableReg, setTableReg] = useState<TableDict[]>([]);
    const [tableMem, setTableMem] = useState<TableDict[]>([]);
    const [data, setData] = useState<string[]>([])
    const dataSeter = (data: string) => {
        setData(oldArray => [...oldArray, data])
    }
    const [input, setInput] = useState<string>('');
    const [input2, setInput2] = useState<IInstructionFormat>({discriminator:0});

    const colors = theme.colors;

    const send = () => {
        // setInput2(input)
    }

    const send2 = () => {

        setInput2(t.decode(input))
    }

    function instanceOf(object: any): object is IIBranchExchange {
        return object.discriminator == 5;
    }

    console.log(instanceOf(input2))

    const init = () => {
        setTableReg([])
        setTableReg([
            { 0: 'r0', 1: 0, },
            { 0: 'r1', 1: 0, },
            { 0: 'r2', 1: 0, },
            { 0: 'r3', 1: 0, },
            { 0: 'r4', 1: 0, },
            { 0: 'r5', 1: 0, },
            { 0: 'r6', 1: 0, },
            { 0: 'r7', 1: 0, },
            { 0: 'r8', 1: 0, },
            { 0: 'r9', 1: 0, },
            { 0: 'r10', 1: 0, },
            { 0: 'r11', 1: 0, },
            { 0: 'r12', 1: 0, },
            { 0: 'r13', 1: 0, },
            { 0: 'r14', 1: 0, },
            { 0: 'r15', 1: 0, },
            { 0: 'cpsr', 1: 0, },
        ])

        setTableMem([
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
            { 0: 0, 1: 0, 2: 0, 3: 0 },
        ])
    }



    const CPU = () => {
        return (
            <div className='Container'>
                <h1>
                    Emulador ARM (simples)
                </h1>
                <div className='IntructionInput'>
                    <InputField
                        input={input}
                        setInput={setInput}
                    />
                </div>
                <div>
                    <Button text='Opção1' submit={true} onClick={send}
                        style={{
                            width: '300px', backgroundColor: colors.fracoBlue,
                            borderBottomRightRadius: 0, borderTopRightRadius: 0
                        }} />
                    <Button text='Opção2' submit={true} onClick={send2} style={{
                        width: '300px', backgroundColor: colors.forteGreen,
                        borderBottomLeftRadius: 0, borderTopLeftRadius: 0
                    }} />
                </div>
                <div>
                    {instanceOf(input2)}
                </div>
                <div className='Tables'>
                    <div style={{marginRight:'50px'}}>
                        <Table
                            title='Registers'
                            data={
                                tableReg
                            }
                            decimal={4}
                            perPege={100}
                        />
                    </div>
                    <div>
                        <Table
                            title='Memory'
                            data={
                                tableMem
                            }
                            perPege={20}
                            binary={8}
                        />
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <>
            {CPU()}
        </>
    )
}

export default Home;