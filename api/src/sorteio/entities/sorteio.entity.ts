import { Document } from 'mongoose';

export interface Sorteio extends Document {
  readonly _id: string;
  readonly type: string;
  readonly title: string;
  readonly slug: string;
  readonly date: Date;
  readonly participants: {
    from: string;
    to: string;
  }[];
}
