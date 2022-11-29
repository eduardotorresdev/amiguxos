import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SorteioService } from './sorteio.service';
import { CreateSorteioDto } from './dto/create-sorteio.dto';

@Controller('sorteios')
export class SorteioController {
  constructor(private readonly sorteioService: SorteioService) {}

  @Post()
  create(@Body() createSorteioDto: CreateSorteioDto) {
    return this.sorteioService.create(createSorteioDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const sorteio = await this.sorteioService.findById(id);

    return sorteio;
  }

  @Get(':id/:participant')
  findFromTo(
    @Param('id') id: string,
    @Param('participant') participant: string,
  ) {
    return this.sorteioService.findFromTo(id, participant);
  }
}
