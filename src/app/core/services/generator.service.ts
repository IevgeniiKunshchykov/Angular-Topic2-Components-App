import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  private alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private digits = '0123456789'.split('');

  // Параметр конструктора будет расценитваться как зависимость.
  constructor(private sequenceLeght: number) {
  }

  // Параметр из конструктора надо перенести сюда
  generateSequesnce(): string {

    let sequence = '';

    for (let index = 0; index < this.sequenceLeght; index++) {

      const isDigit = this.generateRandomBool();
      if (isDigit) {
        sequence += this.digits[this.randomInt(0, this.digits.length - 1)];
      } else {
        let char = this.alphabet[this.randomInt(0, this.alphabet.length - 1)];

        const isUpperCase = this.generateRandomBool();
        if (isUpperCase) {
          char = char.toUpperCase();
        }

        sequence += char;
      }
    }

    return sequence;
  }

  private generateRandomBool(): boolean {
    const randomDigit = Math.random();
    return randomDigit > 0.5;
  }

  private randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
