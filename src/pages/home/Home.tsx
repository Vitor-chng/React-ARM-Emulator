import React, { useEffect, useState } from 'react';
import Button from '../../components/Buttons/LargeButton/Button';
import Table from '../../components/Tables/Table';
import InputField from '../../components/Inputs/InputField';
import { IIBranchExchange, IInstructionFormat, TableDict } from '../../interfaces/Interfaces';
import { IconContext } from "react-icons";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { theme } from '../../styles/ColorTheme';



import './styles.scss';
import { TranslatorService } from '../../services/Translator/Translator';
import { ProcessingService } from '../../services/Processing/Processing';
import ColorTable from '../../components/Tables/ColorTable';


const Home: React.FC = () => {

    const p = new ProcessingService
    const t = new TranslatorService
    const [tableReg, setTableReg] = useState<TableDict[]>([])
    const [tableMem, setTableMem] = useState<TableDict[]>([])
    const [mem, setMem] = useState<number[]>([
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988,4840350,
        12976127,3995988
    ])
    const [reg, setReg] = useState<number[]>([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

    const [multInput, setMultInput] = useState<string[]>([]);
    const [input, setInput] = useState<string>('')
    const [state, setState] = useState<boolean>(false)
    // const [instructions, setInstructions] = useState<IInstructionFormat[]>([])

    const [show, setShow] = useState<boolean>(false)
    const isa = `
    Instruction Set
    (Ry/Op -> can be either Ry or an operand IN DECIMAL please)
    (Rz is the target)
    ADD Rz, Rx, Ry/Op
    ADDS Rz, Rx, Ry/Op
    
    SUB Rz, Rx, Ry/Op
    SUBS Rz, Rx, Ry/Op
    
    MOV Rz, Ry/Op
    AND Rz, Rx, Ry/Op
    
    ORR Rz, Rx, Ry/Op
    
    CMP Rz, Rx, Ry/Op
    
    LDR Rz, Rx
    
    STR Rz, Rx
    
    B Op 
    BNE Op 
    BEQ Op 
    BGT Op 
    BLT Op
    `

    const colors = theme.colors

    const sleep = function () {
      
        setTimeout(function () {
         
        }, 4000);
    }
    const showGrid = () => {
        setShow(!show)
    }

    const Load = () => {
        setMem([
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988,4840350,
            12976127,3995988
        ])
        setReg([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
        // setInstructions([])
        setState(!state)
        handleSetInput()
    }

    const ZeroMem = () => {
        setMem([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
        setState(!state)
    }


    const runOne = () => {
        t.decodePseudo(multInput)
        // multInput.forEach(()=>{
        //     setInstructions(current => [...current, t.decodePseudo(input)]);
        // })
        const processed = p.Process(t.decodePseudo(multInput),mem ,reg)
        setMem(processed[0])
        setReg(processed[1])
        setState(!state)
    }

    const runTimed = () => {

        t.decodePseudo(multInput)
        // multInput.forEach(()=>{
        //     setInstructions(current => [...current, t.decodePseudo(input)]);
        // })
    }

    const handleSetInput = () => {
        setMultInput([])
        input.split(/[\n;]+/).forEach((separatedInput) => {
            if (separatedInput !== '') {
                setMultInput(oldInputs => [...oldInputs, separatedInput])
            }
        })
    }

    const init = () => {
        // setInstructions([])
        setMultInput([])
        setTableReg([
            { 0: 'r0', 1: reg[0], },
            { 0: 'r1', 1: reg[1], },
            { 0: 'r2', 1: reg[2], },
            { 0: 'r3', 1: reg[3], },
            { 0: 'r4', 1: reg[4], },
            { 0: 'r5', 1: reg[5], },
            { 0: 'r6', 1: reg[6], },
            { 0: 'r7', 1: reg[7], },
            { 0: 'r8', 1: reg[8], },
            { 0: 'r9', 1: reg[9], },
            { 0: 'r10', 1: reg[10], },
            { 0: 'r11', 1: reg[11], },
            { 0: 'r12', 1: reg[12], },
            { 0: 'r13', 1: reg[13], },
            { 0: 'r14', 1: reg[14], },
            { 0: 'r15', 1: reg[15], },
            { 0: 'cpsr', 1: reg[16], },
        ])
        // max color 16777215
        setTableMem([
            {0:mem[0],1:mem[1],2:mem[2],3:mem[3]},
            {0:mem[4],1:mem[5],2:mem[6],3:mem[7]},
            {0:mem[8],1:mem[9],2:mem[10],3:mem[11]},
            {0:mem[12],1:mem[13],2:mem[14],3:mem[15]},
            {0:mem[16],1:mem[17],2:mem[18],3:mem[19]},
            {0:mem[20],1:mem[21],2:mem[22],3:mem[23]},
            {0:mem[24],1:mem[25],2:mem[26],3:mem[27]},
            {0:mem[28],1:mem[29],2:mem[30],3:mem[31]},
            {0:mem[32],1:mem[33],2:mem[34],3:mem[35]},
            {0:mem[36],1:mem[37],2:mem[38],3:mem[39]},
            {0:mem[40],1:mem[41],2:mem[42],3:mem[43]},
            {0:mem[44],1:mem[45],2:mem[46],3:mem[47]},
            {0:mem[48],1:mem[49],2:mem[50],3:mem[51]},
            {0:mem[52],1:mem[53],2:mem[54],3:mem[55]},
            {0:mem[56],1:mem[57],2:mem[58],3:mem[59]},
            {0:mem[60],1:mem[61],2:mem[62],3:mem[63]},
            {0:mem[64],1:mem[65],2:mem[66],3:mem[67]},
        ])
    }



    const CPU = () => {
        return (
            <div className='Container'>
                <div className='Title'>
                    <h1>
                        Emulador ARM (simples)
                    </h1>
                    <IconContext.Provider value={{ color: colors.forteBlue, size: '1.5em' }}>
                        <FaInfoCircle data-tooltip-id='tooltip' data-tooltip-content={isa}  data-tooltip-float="true" data-html="true"/>
                    </IconContext.Provider>
                    <Tooltip id='tooltip' />
                </div>
                <div className='IntructionInput'>
                    <InputField
                        input={input}
                        setInput={setInput}
                    />
                </div>
                <div>
                    <Button text='Load Code' submit={true} onClick={Load}
                        style={{
                            width: '200px', backgroundColor: colors.fracoBlue,
                            borderBottomRightRadius: 0, borderTopRightRadius: 0
                        }} />
                    <Button text='Run 1' submit={true} onClick={runOne} style={{
                        width: '200px', backgroundColor: colors.fracoGreen,
                        borderBottomLeftRadius: 0, borderTopLeftRadius: 0
                    }} />
                    {/* <Button text='Run 1Hz' submit={true} onClick={runTimed} style={{
                        width: '200px', backgroundColor: colors.forteGreen,
                        borderBottomLeftRadius: 0, borderTopLeftRadius: 0
                    }} /> */}
                </div>
                <div>
                    <Button text='Show Color Grid' submit={false} onClick={showGrid} style={{
                        width: '200px', backgroundColor: colors.forteGreen,borderBottomRightRadius: 0, borderTopRightRadius: 0
                    }} />
                    <Button text='Reset Memory' submit={false} onClick={ZeroMem} style={{
                        width: '200px', backgroundColor: colors.fracoBlue,borderBottomLeftRadius: 0, borderTopLeftRadius: 0
                    }} />
                </div>
                { show ? 
                <div className='Grid'>
                <div style={{ marginRight: '50px' }}>
                    <ColorTable
                        title='Color Grid'
                        data={
                            tableMem
                        }
                        binary={32}
                        perPege={100}
                    />
                </div>
            </div>: <></> }
                <div className='Tables'>
                    <div style={{ marginRight: '50px' }}>
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
                            binary={32}
                        />
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        init()
    }, [])
    useEffect(() => {
        setTableReg([
            { 0: 'r0', 1: reg[0], },
            { 0: 'r1', 1: reg[1], },
            { 0: 'r2', 1: reg[2], },
            { 0: 'r3', 1: reg[3], },
            { 0: 'r4', 1: reg[4], },
            { 0: 'r5', 1: reg[5], },
            { 0: 'r6', 1: reg[6], },
            { 0: 'r7', 1: reg[7], },
            { 0: 'r8', 1: reg[8], },
            { 0: 'r9', 1: reg[9], },
            { 0: 'r10', 1: reg[10], },
            { 0: 'r11', 1: reg[11], },
            { 0: 'r12', 1: reg[12], },
            { 0: 'r13', 1: reg[13], },
            { 0: 'r14', 1: reg[14], },
            { 0: 'r15', 1: reg[15], },
            { 0: 'cpsr', 1:reg[16], },
        ])
        // max color 16777215
        setTableMem([
            {0:mem[0],1:mem[1],2:mem[2],3:mem[3]},
            {0:mem[4],1:mem[5],2:mem[6],3:mem[7]},
            {0:mem[8],1:mem[9],2:mem[10],3:mem[11]},
            {0:mem[12],1:mem[13],2:mem[14],3:mem[15]},
            {0:mem[16],1:mem[17],2:mem[18],3:mem[19]},
            {0:mem[20],1:mem[21],2:mem[22],3:mem[23]},
            {0:mem[24],1:mem[25],2:mem[26],3:mem[27]},
            {0:mem[28],1:mem[29],2:mem[30],3:mem[31]},
            {0:mem[32],1:mem[33],2:mem[34],3:mem[35]},
            {0:mem[36],1:mem[37],2:mem[38],3:mem[39]},
            {0:mem[40],1:mem[41],2:mem[42],3:mem[43]},
            {0:mem[44],1:mem[45],2:mem[46],3:mem[47]},
            {0:mem[48],1:mem[49],2:mem[50],3:mem[51]},
            {0:mem[52],1:mem[53],2:mem[54],3:mem[55]},
            {0:mem[56],1:mem[57],2:mem[58],3:mem[59]},
            {0:mem[60],1:mem[61],2:mem[62],3:mem[63]},
            {0:mem[64],1:mem[65],2:mem[66],3:mem[67]},
        ])
    }, [state])

    return (<>{CPU()}</>)
}

export default Home;