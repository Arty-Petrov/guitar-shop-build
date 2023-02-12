import { ConfigService, registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import * as process from 'process';

export const jwtConfig = registerAs('jwt', () => ({
  accessSecret: process.env.JWT_ACCESS_SECRET,
}));

export async function getJwtAccessOptions(configService: ConfigService): Promise<JwtModuleOptions> {
  return {
    secret: configService.get<string>('jwt.accessSecret'),
    signOptions: { expiresIn: '6000s', algorithm: 'HS256' }
  }
}
