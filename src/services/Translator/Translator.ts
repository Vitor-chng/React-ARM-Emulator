import { IIBranchExchange, IInstructionFormat } from "../../interfaces/Interfaces";

export class TranslatorService {
  private const = 'aaaaa';
  private i: IInstructionFormat={discriminator: 0}

  public decode(instruction: string) {
    // reseta o discriminador
    this.i.discriminator=0

    // 'usa single quote pf'
    console.log('O console log é o printf do ts')
    console.log('O que esta aqui vc ve no console f12 no browser')
    console.log(instruction)
    console.log(instruction.substring(4, 28))
    // 10000001001011111111111100010000 <-exemplo de instrução
    
    //Case 
    if (instruction.substring(4, 28) == '000100101111111111110001') {
      console.log('Foi')
      this.i = {
        discriminator: 5,
        cond: Number(instruction.substring(0, 4)),
        rn: Number(instruction.substring(28, 32))
      }
    }
    // add cases
    // else if(){

    // }

    console.log((this.i))

    return this.i
  }

  public Superdecode(instruction: string | number) {

    return 0
  }


}