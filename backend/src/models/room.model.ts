import { Schema, model, Document } from "mongoose";

export interface IRoom extends Document {
  RooNom: string;
}

const RoomSchema = new Schema<IRoom>(
  {
    RooNom: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IRoom>("Room", RoomSchema);
