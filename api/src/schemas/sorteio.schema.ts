import * as mongoose from 'mongoose';

export const SorteioSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
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

        return {
          ...ret,
          _id: ret._id.substr(ret._id.length - 4).toUpperCase(),
          participants: ret.participants.map((participant) => participant.from),
        };
      },
    },
  },
);
