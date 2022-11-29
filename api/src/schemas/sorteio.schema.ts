import * as mongoose from 'mongoose';

export const SorteioSchema = new mongoose.Schema(
  {
    _id: String,
    type: String,
    title: String,
    slug: String,
    date: Date,
    participants: [
      {
        from: String,
        to: String,
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;

        ret.id = ret._id.substr(ret._id.length - 4);
        delete ret._id;

        return {
          ...ret,
          participants: ret.participants.map((participant) => participant.from),
        };
      },
    },
  },
);
