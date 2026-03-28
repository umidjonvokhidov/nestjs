import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getTypeOrmConfig(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    url: configService.getOrThrow<string>('DATABASE_URL'),
    ssl: true,
    autoLoadEntities: true,
    synchronize: true,
  };
}
