import { GeneratorService } from './generator.service';

export function GeneratorServiceFactory(n: number) {
    return () => new GeneratorService(n);
  }
