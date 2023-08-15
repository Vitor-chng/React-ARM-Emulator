import { IIBranchExchange, IInstructionFormat, TableDict } from "../../interfaces/Interfaces";
// Not used
// function instanceOf(object: any): object is IInstructionFormat {
//     return object.discriminator
// }

export class ProcessingService {

  public Process(instruction: string[],mem:number[],reg:number[]) {
    let i = instruction
    let m = mem
    let r = reg
      // console.log(instruction)
      // console.log(m)
      // console.log(r)

      const allInsttruc = instruction.map((input)=>{
        return input.split(/[\s,]+/)
      })
      let z = 0;
      let x = 0;
      let y = 0;
      if(m[16] == 0){
        // eq Z set
      }
      if(m[16] == 1){
        // ne  Z clear
      }
      if(m[16] == 11){
        //lt   N not equal to V
      }
      if(m[16] == 12){
        // gt Z clear AND (N equals V)
      }
      console.log(allInsttruc)
      console.log(r[15]/4)

      if(allInsttruc[r[15]/4][0] == 'ADD'){
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        r[z]=x+y
        
      }else
      if(allInsttruc[r[15]/4][0] == 'ADDS'){
        r[16]=0
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        r[z]=x+y
        if((x+y)<0){
          // N
          r[16]=r[16]+8
        }
        if((x+y)==0){
          // Z
          r[16]=r[16]+4
        }
        if((x+y)>(2**32) || (x+y)<(-(2**32))){
          // C
          r[16]=r[16]+2
        }
        if((x+y)>(2**31) || (x+y)<(-(2**31))){
          // V
          r[16]=r[16]+1
        }
        
      }else

      if(allInsttruc[r[15]/4][0] == 'SUB'){
        
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        r[z]=x-y
      }else
      if(allInsttruc[r[15]/4][0] == 'SUBS'){
        r[16]=0
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        r[z]=x-y
        if((x-y)<0){
          // N
          r[16]=r[16]+8
        }
        if((x-y)==0){
          // Z
          r[16]=r[16]+4
        }
        if((x-y)>(2**32) || (x-y)<(-(2**32))){
          // C
          r[16]=r[16]+2
        }
        if((x-y)>(2**31) || (x-y)<(-(2**31))){
          // V
          r[16]=r[16]+1
        }
      }else

      if(allInsttruc[r[15]/4][0] == 'MOV'){
        
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        if(allInsttruc[r[15]/4][2].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][2])
        }
        r[z]=y
      }else

      if(allInsttruc[r[15]/4][0] == 'AND'){
        
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        let xBin = x.toString(2)
        let yBin = y.toString(2)
        let zBin = ''
        
        while (xBin.length < 32) {
          xBin = '0' + xBin;
        }
        while (yBin.length < 32) {
          yBin = '0' + yBin;
        }
        let cont =0
        while(cont < 32){
          if(xBin[cont] == yBin[cont]){
            zBin=zBin+'1'
          }else zBin=zBin+'0'
          cont++
        }
        r[z]=Number(zBin)
      }else
      if(allInsttruc[r[15]/4][0] == 'ORR'){
        
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        let xBin = x.toString(2)
        let yBin = y.toString(2)
        let zBin = ''
        
        while (xBin.length < 32) {
          xBin = '0' + xBin;
        }
        while (yBin.length < 32) {
          yBin = '0' + yBin;
        }
        let cont =0
        while(cont < 32){
          if(xBin[cont] == '1'|| yBin[cont] == '1'){
            zBin=zBin+'1'
          }else zBin=zBin+'0'
          cont++
        }
        r[z]=Number(zBin)
      }else

      if(allInsttruc[r[15]/4][0] == 'CMP'){
        
        r[16]=0
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        x=r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        if(allInsttruc[r[15]/4][3].includes('R')){
          y= r[Number(allInsttruc[r[15]/4][3].replace('R',''))]
        }else{
          y=Number(allInsttruc[r[15]/4][3])
        }
        if((x-y)<0){
          // N
          r[16]=r[16]+8
        }
        if((x-y)==0){
          // Z
          r[16]=r[16]+4
        }
        if((x-y)>(2**32) || (x+y)<(-(2**32))){
          // C
          r[16]=r[16]+2
        }
        if((x-y)>(2**31) || (x+y)<(-(2**31))){
          // V
          r[16]=r[16]+1
        }
      }else

      if(allInsttruc[r[15]/4][0] == 'LDR'){
        
        z=Number(allInsttruc[r[15]/4][1].replace('R',''))
        y= r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        r[z]=m[y/4]
      }else

      if(allInsttruc[r[15]/4][0] == 'STR'){
        
        z=r[Number(allInsttruc[r[15]/4][1].replace('R',''))]
        y= r[Number(allInsttruc[r[15]/4][2].replace('R',''))]
        m[z/4]=y
      }else

      if(allInsttruc[r[15]/4][0] == 'B'){
        
        z=Number(allInsttruc[r[15]/4][1])
        
        r[15]=z-4
        console.log(r[15])
      }else

      if(allInsttruc[r[15]/4][0] == 'BNE'){
        
        if(r[16] == 1){
          z=Number(allInsttruc[r[15]/4][1])
          r[15]=z-4
        }
      }else

      if(allInsttruc[r[15]/4][0] == 'BEQ'){
        
        if(r[16] == 0){
          z=Number(allInsttruc[r[15]/4][1])
          r[15]=z-4
        }
      }else

      if(allInsttruc[r[15]/4][0] == 'BGT'){
        
        if(r[16] == 12){
          z=Number(allInsttruc[r[15]/4][1])
          r[15]=z-4
        }
      }else

      if(allInsttruc[r[15]/4][0] == 'BLT'){
        
        if(r[16] == 11){
          z=Number(allInsttruc[r[15]/4][1])
          r[15]=z-4
        }
      }else r[15]=r[15]+4
      r[15]=r[15]+4
    return [m,r]
  }


}