import { IIBranchExchange, IInstructionFormat } from "../../interfaces/Interfaces";

export class TranslatorService {
  private i: IInstructionFormat={discriminator: 0}

  // Not Used
  public decodeBin(instruction: string) {
    // reseta o discriminador
    
    //Case 
    if (instruction.substring(4, 28) == '000100101111111111110001') {
      this.i = {
        discriminator: 5,
        cond: Number(instruction.substring(0, 4)),
        rn: Number(instruction.substring(28, 32))
      }
    }else
    //interface undefined
    if (instruction.substring(4, 7) == '011' && instruction.substring(27, 28) == '1'){
      this.i = {
        discriminator: 0,
        cond: Number(instruction.substring(0, 4))
      }
    }else
    //interface IIDataProcessing {
    if (instruction.substring(4, 6) == '00'){
      this.i = {
        discriminator: 1,
        cond: Number(instruction.substring(0, 4)),
        i: Number(instruction.substring(6, 7)),
        opcode: Number(instruction.substring(7, 11)),
        s: Number(instruction.substring(11, 12)),
        rn: Number(instruction.substring(12, 16)),
        rd: Number(instruction.substring(16, 20)),
        operand: Number(instruction.substring(20, 32))
      }
    }else
    //interface MULT {
    if (instruction.substring(4, 10) == '000000' && instruction.substring(24, 28) == '1001') {
      this.i = {
        discriminator: 2,
        cond: Number(instruction.substring(0, 4)),
        a: Number(instruction.substring(10, 11)),
        s: Number(instruction.substring(11, 12)),
        rd: Number(instruction.substring(12, 16)),
        rn: Number(instruction.substring(16, 20)),
        rs: Number(instruction.substring(20, 24)),
        rm: Number(instruction.substring(28, 32))
              }
    }else
       //interface MULTLONG {
    if (instruction.substring(4, 9) == '00001' && instruction.substring(24, 28) == '1001') {
      this.i = {
        discriminator: 3,
        cond: Number(instruction.substring(0, 4)),
        u: Number(instruction.substring(9, 10)),
        a: Number(instruction.substring(10, 11)),
        s: Number(instruction.substring(11, 12)),
        rdhi: Number(instruction.substring(12, 16)),
        rdlo: Number(instruction.substring(16, 20)),
        rs: Number(instruction.substring(20, 24)),
        rm: Number(instruction.substring(28, 32))
              }
    }else
    //interface SingleDataSwap 
    if (instruction.substring(4, 9) == '00001' && instruction.substring(10, 12) == '00' && instruction.substring(20, 24) == '0000' && instruction.substring(24, 28) == '1001'){
      this.i = {
        discriminator: 4,
        cond: Number(instruction.substring(0, 4)),
        b: Number(instruction.substring(9, 10)),
        rn: Number(instruction.substring(12, 16)),
        rd: Number(instruction.substring(16, 20)),
        rm: Number(instruction.substring(28, 32)),
      }
    }else
    //interface halfwordregisteroffset 
    if (instruction.substring(4, 7) == '000' && instruction.substring(9, 10) == '0' && instruction.substring(20, 25) == '00001' && instruction.substring(27, 28) == '1') {
      this.i = {
        discriminator: 6,
        cond: Number(instruction.substring(0, 4)),
        p: Number(instruction.substring(7, 8)),
        u: Number(instruction.substring(8, 9)),
        w: Number(instruction.substring(10, 11)),
        l: Number(instruction.substring(11, 12)),
        rn: Number(instruction.substring(12, 16)),
        rd: Number(instruction.substring(16, 20)),
        s: Number(instruction.substring(25, 26)),
        h: Number(instruction.substring(26, 27)),
        rm: Number(instruction.substring(28, 32))
              }
    }else
    //interface halfwordimediateregisteroffset 
    if (instruction.substring(4, 7) == '000' && instruction.substring(9, 10) == '1' && instruction.substring(24, 25) == '1' && instruction.substring(27, 28) == '1') {
      this.i = {
        discriminator: 7,
        cond: Number(instruction.substring(0, 4)),
        p: Number(instruction.substring(7, 8)),
        u: Number(instruction.substring(8, 9)),
        w: Number(instruction.substring(10, 11)),
        l: Number(instruction.substring(11, 12)),
        rn: Number(instruction.substring(12, 16)),
        rd: Number(instruction.substring(16, 20)),
        offset1: Number(instruction.substring(20, 24)),
        s: Number(instruction.substring(25, 26)),
        h: Number(instruction.substring(26, 27)),
        offset2: Number(instruction.substring(28, 32)),
              }
    }else
    //interface SingleDataTransfer {
    if (instruction.substring(4, 6) == '01'){
      this.i = {
        discriminator: 8,
        cond: Number(instruction.substring(0, 4)),
        i: Number(instruction.substring(6, 7)),
        p: Number(instruction.substring(7, 8)),
        u: Number(instruction.substring(8, 9)),
        b: Number(instruction.substring(9, 10)),
        w: Number(instruction.substring(10, 11)),
        l: Number(instruction.substring(11, 12)),
        rn: Number(instruction.substring(12, 16)),
        rd: Number(instruction.substring(16, 20)),
        offset: Number(instruction.substring(20, 32))
      }
    }else
    //interface BlockDataTransfer {
    if (instruction.substring(4, 7) == '100'){
      this.i = {
        discriminator: 9,
        cond: Number(instruction.substring(0, 4)),
        p: Number(instruction.substring(7, 8)),
        u: Number(instruction.substring(8, 9)),
        s: Number(instruction.substring(9, 10)),
        w: Number(instruction.substring(10, 11)),
        l: Number(instruction.substring(11, 12)),
        rn: Number(instruction.substring(12, 16)),
        regList: Number(instruction.substring(16, 32))
      }
    }else
    //interface Branch
      if (instruction.substring(4, 7) == '101'){

        this.i = {
          discriminator: 10,
          cond: Number(instruction.substring(0, 4)),
          l: Number(instruction.substring(7, 8)),
          offset: Number(instruction.substring(8, 32))
        }
      }else
      //interface SoftwareInterrupt
      if (instruction.substring(4, 8) == '1111'){

        this.i = {
          discriminator: 11,
          cond: Number(instruction.substring(0, 4))
        }
      }else
      this.i = {
        discriminator: 0,
        cond: 0
      }
    return this.i
  }

  public decodePseudo(instruction: string[]) {
    // Not Implemented
    return instruction
  }


}