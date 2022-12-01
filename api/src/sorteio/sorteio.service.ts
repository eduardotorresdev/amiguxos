import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSorteioDto } from './dto/create-sorteio.dto';
import { Sorteio } from './entities/sorteio.entity';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';

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
      slug: slugify(createSorteioDto.title).toLowerCase(),
      participants: sorteio.sort((a, b) => {
        if (a.from < b.from) {
          return -1;
        }
        if (a.from > b.from) {
          return 1;
        }
        return 0;
      }),
    });

    return createdSorteio.save();
  }

  async findById(type: string, _id: string): Promise<Sorteio> {
    return this.sorteioModel
      .findOne({ _id: { $regex: `${_id}$`, $options: 'i' }, type })
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
