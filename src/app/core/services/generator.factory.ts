import { GeneratorService } from './generator.service';

// В таком варианте вы возвращаете сервис, а надо вернуть уже готовую последовательность
export function GeneratorServiceFactory(n: number) {
  return () => new GeneratorService(n);
}

// Примерно в такой форме должен быть этот сервис
// export function GeneratorServiceFactory(n: number) {
//   return (gs: GeneratorService) => gs.generate(n);
// }
