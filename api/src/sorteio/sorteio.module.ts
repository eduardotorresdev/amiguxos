import { Module } from '@nestjs/common';
import { SorteioService } from './sorteio.service';
import { SorteioController } from './sorteio.controller';
import { sorteioProviders } from './sorteio.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SorteioController],
  providers: [SorteioService, ...sorteioProviders],
})
export class SorteioModule {}
