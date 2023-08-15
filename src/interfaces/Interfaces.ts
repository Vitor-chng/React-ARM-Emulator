export interface IButtonProps {
    text: string,
    onClick?: any,
    submit?: boolean,
    color?: string
    style?: React.CSSProperties
}


export interface TableDict {
    [key: number]: number | string | JSX.Element
}

// Not Used
// Instruction types:

// discriminator = 0
export interface IIUndefined {
    discriminator: number,
    cond: number,
}
// discriminator = 1
export interface IIDataProcessing {
    discriminator: number,
    cond: number,
    opcode: number,
    s: number,
    rn: number,
    rd: number,
    operand: number

}
// discriminator = 2
export interface IIMult {
    discriminator: number,
    cond: number,
    a: number,
    s: number,
    rn: number,
    rd: number,
    rs: number,
    rm: number,

}
// discriminator = 3
export interface IIMultLong {
    discriminator: number,
    cond: number,
    a: number,
    s: number,
    u: number,
    rdlo: number,
    rdhi: number,
    rs: number,
    rm: number,
}
// discriminator = 4
export interface IISingleDataSwap {
    discriminator: number,
    cond: number,
    b: number,
    rn: number,
    rd: number,
    rm: number,
}
// discriminator = 5
export interface IIBranchExchange {
    discriminator: number,
    cond: number,
    rn: number,
}
// discriminator = 6
export interface IIHDTRegisterOffset {
    discriminator: number,
    cond: number,
    p: number,
    u: number,
    w: number,
    l: number,
    s: number,
    h: number,
    rn: number,
    rd: number,
    rm: number,
}
// discriminator = 7
export interface IIHDTImmediateOffset {
    discriminator: number,
    cond: number,
    p: number,
    u: number,
    w: number,
    l: number,
    s: number,
    h: number,
    rn: number,
    rd: number,
    offset1: number,
    offset2: number,
}
// discriminator = 8
export interface IISingleDataTransfer {
    discriminator: number,
    cond: number,
    i: number,
    p: number,
    u: number,
    b: number,
    w: number,
    l: number,
    rn: number,
    rd: number,
    offset: number,
}
// discriminator = 9
export interface IIBlockDataTransfer {
    discriminator: number,
    cond: number,
    p: number,
    u: number,
    s: number,
    w: number,
    l: number,
    rn: number,
    regList: number,
}
// discriminator = 10
export interface IIBranch {
    discriminator: number,
    cond: number,
    l: number,
    offset: number,
}
// discriminator = 11
export interface IISoftwareInterrupt {
    discriminator: number,
    cond: number,
}

// coprocessors not implemented
export interface IICoprocessorDataTransfer {
    discriminator: number,
    cond: number,
}

export interface IICoprocessorDataOperation {
    discriminator: number,
    cond: number,
}

export interface IICoprocessorRegisterTransfer {
    discriminator: number,
    cond: number,
}



// export interface IInstructionFormat {

// }

export type IInstructionFormat = IISoftwareInterrupt | IICoprocessorRegisterTransfer | IICoprocessorDataOperation | IICoprocessorDataTransfer | IIBranch | IIBlockDataTransfer | IIUndefined | IISingleDataTransfer | IIHDTImmediateOffset | IIHDTRegisterOffset | IIBranchExchange | IIMultLong | IIMult | IIDataProcessing|{discriminator: number,}

// {
//     instruction: IISoftwareInterrupt | IICoprocessorRegisterTransfer | IICoprocessorDataOperation | IICoprocessorDataTransfer | IIBranch | IIBlockDataTransfer | IIUndefined | IISingleDataTransfer | IIHDTImmediateOffset | IIHDTRegisterOffset | IIBranchExchange | IIMultLong | IIMult | IIDataProcessing|{}
// }