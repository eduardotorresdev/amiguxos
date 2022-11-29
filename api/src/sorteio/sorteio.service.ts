import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSorteioDto } from './dto/create-sorteio.dto';
import { Sorteio } from './entities/sorteio.entity';
import { v4 as uuidv4 } from 'uuid';

type Participant = {
  from: string;
  to: string;
};

@Injectable()
export class SorteioService {
  constructor(
    @Inject('SORTEIO_MODEL')
    private sorteioModel: Model<Sorteio>,
  ) {}

  shuffle(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  async create(createSorteioDto: CreateSorteioDto): Promise<Sorteio> {
    const participants = this.shuffle([...createSorteioDto.participants]);

    const sorteio = participants.map((participant, i) => {
      const newIndex = i + 1;

      return {
        from: participant,
        to: participants[newIndex % participants.length],
      };
    });

    const createdSorteio = new this.sorteioModel({
      ...createSorteioDto,
      _id: uuidv4(),
      participants: sorteio,
    });

    return createdSorteio.save();
  }

  async findById(_id: string): Promise<Sorteio> {
    return this.sorteioModel
      .findOne({ _id: { $regex: `${_id}$`, $options: 'i' } })
      .exec();
  }

  async findFromTo(_id: string, participant: string): Promise<Participant> {
    const sorteio = await this.sorteioModel
      .findOne({
        _id: { $regex: `${_id}$`, $options: 'i' },
        participants: {
          $elemMatch: {
            from: { $regex: participant, $options: 'i' },
          },
        },
      })
      .exec();

    const regex = new RegExp(participant, 'i');

    return sorteio?.participants.find((item) => {
      return regex.test(item.from);
    });
  }
}
