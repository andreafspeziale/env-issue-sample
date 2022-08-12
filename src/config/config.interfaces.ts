export enum NodeEnv {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export interface ServerConfig {
  host?: string;
  port: number;
}

export interface Config {
  env: NodeEnv;
  server: ServerConfig;
  envWithIssue: number;
}
