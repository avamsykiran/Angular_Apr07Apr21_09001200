import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inwords'
})
export class InwordsPipe implements PipeTransform {

  words: string[] = ["ZERO ", "ONE ", "Two ", "THREE ",
    "FOUR ", "FIVE ", "SIX ", "SEVEN ", "EIGHT ", "NINE "];

  transform(value: number): string {
    let strValue = `${value}`;
    let result ="";

    for(let i=0;i<strValue.length;i++){
      let ch = strValue.charAt(i);
      if(ch==='.'){
        result+=" dot ";
      }else{
        result+= this.words[parseInt(ch)];
      }
    }
    return result;
  }

}
