import { GeneratorService } from './generator.service';

export function GeneratorServiceFactory(n: number) {
    return function(): GeneratorService {
      return new GeneratorService(n);
    };
  }
  