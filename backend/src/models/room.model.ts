import { Schema, model, Document } from "mongoose";

export interface IRoom extends Document {
  RooDes: string;
}

const RoomSchema = new Schema<IRoom>(
  {
    RooDes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IRoom>("Room", RoomSchema);
