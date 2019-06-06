import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorService } from './services/generator.service';
import { GeneratorServiceFactory, GeneratedSequence } from './services/generator.factory';

export const Constants = new InjectionToken<string>('constants');

@NgModule({
  declarations: [],
  providers: [
    {
      provide: Constants,
      useValue: {
        app: 'TestApp',
        version: {
          full: '1.0.0'
        }
      }
    },
    GeneratorService,
    {
      provide: GeneratedSequence,
      useFactory: GeneratorServiceFactory(100),      
      deps: [GeneratorService]
    }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
