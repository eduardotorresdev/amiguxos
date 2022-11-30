import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { SorteioService } from './sorteio.service';
import { CreateSorteioDto } from './dto/create-sorteio.dto';

@Controller('sorteios')
export class SorteioController {
  constructor(private readonly sorteioService: SorteioService) {}

  @Post()
  create(@Body() createSorteioDto: CreateSorteioDto) {
    return this.sorteioService.create(createSorteioDto);
  }

  @Get(':type/:id')
  async findOne(@Param('type') type: string, @Param('id') id: string) {
    const sorteio = await this.sorteioService.findById(type, id);

    if (!sorteio)
      throw new NotFoundException('O sorteio consultado não encontrado');

    return sorteio;
  }

  @Get(':type/:id/:participant')
  findFromTo(
    @Param('id') id: string,
    @Param('participant') participant: string,
  ) {
    const fromTo = this.sorteioService.findFromTo(id, participant);

    if (!fromTo)
      throw new NotFoundException(
        'Verifique se o nome/email que você inseriu está correto',
      );

    return fromTo;
  }
}
