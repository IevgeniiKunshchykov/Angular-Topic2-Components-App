import { GeneratorService } from './generator.service';
import { InjectionToken } from '@angular/core';

export const GeneratedSequence = new InjectionToken<string>('generated Sequence');

export function GeneratorServiceFactory(digitsCount: number) {
  return (gs: GeneratorService) => gs.generateSequesnce(digitsCount);
}
