import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from './config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService<Config>) {}

  getEnvWithIssue(): number {
    return this.configService.get<number>('envWithIssue');
  }
}
