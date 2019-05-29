import { IConfigOptions } from '../interfaces/config-options.interface';

export class ConfigOptions implements IConfigOptions {
    public id: number;
    public login: string;
    public email?: string;
    public mode?: string;
    public connectionString?: string;
    public encryptionKey?: string;

    constructor(id: number, login: string, email?: string, mode?: string, connectionString?: string, encryptionKey?: string
    ) {
        this.id = id;
        this.login = login;
        this.email = email;
        this.mode = mode || 'Dev';
        this.connectionString = connectionString || 'TestConnectionString';
        this.encryptionKey = encryptionKey;
    }
}
