import { Injectable, Version } from '@angular/core';

@Injectable()
export class ConstantsService {

  app: string;
  version: Version

  constructor() { }
}
