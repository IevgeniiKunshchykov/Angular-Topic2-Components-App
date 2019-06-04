import { Injectable, Version } from '@angular/core';

// По услоию задачи это должен быть не класс, а литерал, чтобы создать токен для этого литерала
@Injectable()
export class ConstantsService {

  app: string;
  version: Version;

  constructor() { }
}
