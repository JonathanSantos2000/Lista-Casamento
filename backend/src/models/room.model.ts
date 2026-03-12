import { Schema, model, Document } from "mongoose";

export interface IRoom extends Document {
  ComId: number;
  ComDes: string;
}

const RoomSchema = new Schema<IRoom>(
  {
    ComId: {
      type: Number,
      required: true,
      unique: true,
    },

    ComDes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IRoom>("Room", RoomSchema);
