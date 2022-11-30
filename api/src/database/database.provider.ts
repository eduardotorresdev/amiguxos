import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (configService: ConfigService): Promise<typeof mongoose> => {
      return mongoose.connect(
        `mongodb://${configService.get('DB_USER')}:${configService.get(
          'DB_PASS',
        )}@${configService.get('DB_HOST')}:27017/${configService.get(
          'DB_NAME',
        )}?authSource=admin`,
      );
    },
    inject: [ConfigService],
  },
];
