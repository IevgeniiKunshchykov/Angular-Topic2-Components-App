import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  private alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private digits = '0123456789'.split('');

  constructor(private sequenceLeght: number) {
  }

  generateSequesnce(): string{

    var sequence: string = '';

    for (let index = 0; index < this.sequenceLeght; index++) {

      var isDigit = this.generateRandomBool();
      if(isDigit){
        sequence += this.digits[this.randomInt(0, this.digits.length - 1)];
      }
      else{
        var char = this.alphabet[this.randomInt(0, this.alphabet.length - 1)];
        
        var isUpperCase = this.generateRandomBool();
        if(isUpperCase){
          char = char.toUpperCase();
        }

        sequence += char;
      }
    }

    return sequence;
  }

  private generateRandomBool(): boolean{
    var randomDigit = Math.random();
    return randomDigit > 0.5;
  }

  private randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
}
