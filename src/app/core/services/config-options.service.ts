import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IConfigOptions } from '../interfaces/config-options.interface';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {

  private configOptions: IConfigOptions;

  private configOptionsSubject: Subject<IConfigOptions> = new Subject<IConfigOptions>();
  private configOptions$: Observable<IConfigOptions> = this.configOptionsSubject.asObservable();

  constructor() { }

  setConfigOptions(configOptions: IConfigOptions) {
    // Такой вариант полностью перепишет один объект другим
    // Как вариант можно попробовать так
    this.configOptions = {...this.configOptions, ...configOptions};
    // this.configOptions = configOptions;
    this.configOptionsSubject.next(this.configOptions);
  }

  getConfigOptions(): Observable<IConfigOptions> {
    return this.configOptions$;
  }
}
