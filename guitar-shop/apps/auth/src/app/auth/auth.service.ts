import { AuthGetToken, AuthValidateToken } from '@guitar-shop/contracts';
import { TokenData } from '@guitar-shop/shared-types';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('JwtAccessService') private readonly jwtAccessService: JwtService,
  ) {}

  private async createPayloadPayload(dto: AuthGetToken.Request): Promise<TokenData> {
    const { id, email, name } = dto;
    return { sub: id, email, name };
  }

  async generateToken(dto: AuthGetToken.Request): Promise<AuthGetToken.Response> {
    const payload = await this.createPayloadPayload(dto);
    const accessToken = await this.jwtAccessService.signAsync(payload);

    return { token: accessToken };
  }

  async getTokenData(
    { token }: AuthValidateToken.Request
  ): Promise<AuthValidateToken.Response> {
    const tokenData = await this.jwtAccessService.decode(token) as TokenData;
    const { sub, email, name } = tokenData;
    return { id: sub, name, email, token };
  }
}
