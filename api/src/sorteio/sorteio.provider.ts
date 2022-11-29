import { Connection } from 'mongoose';
import { SorteioSchema } from '../schemas/sorteio.schema';

export const sorteioProviders = [
  {
    provide: 'SORTEIO_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Sorteio', SorteioSchema, 'sorteios'),
    inject: ['DATABASE_CONNECTION'],
  },
];
