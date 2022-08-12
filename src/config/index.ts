import { Config, NodeEnv } from './config.interfaces';

export * from './config.interfaces';
export * from './config.schema';

export default (): Config => ({
  env: process.env.NODE_ENV as NodeEnv,
  server: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
  },
  envWithIssue: parseInt(process.env.ENV_WITH_ISSUE, 10),
});
