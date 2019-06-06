import { IConfigOptions } from '../interfaces/config-options.interface';

export class ConfigOptions implements IConfigOptions {

    constructor(
        public id: number, 
        public login: string, 
        public email?: string, 
        public mode?: string, 
        public connectionString?: string, 
        public encryptionKey?: string
    ) {
        this.mode = mode || 'Dev';
        this.connectionString = connectionString || 'TestConnectionString';
    }
}
