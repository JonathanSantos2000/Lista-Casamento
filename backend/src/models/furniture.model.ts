import { Schema, model, Document, Types } from "mongoose";

export interface IFurniture extends Document {
  FurId: number;
  FurDes: string;
  FurComId: Types.ObjectId;
  FurComDes?: string;
  FurVlrIte: number;
  FurVlrAre: number;
  FurVlrPer: number;
}

const FurnitureSchema = new Schema<IFurniture>(
  {
    FurId: {
      type: Number,
      required: true,
      unique: true,
    },

    FurDes: {
      type: String,
      required: true,
    },

    FurComId: {
      type: Schema.Types.ObjectId,
      ref: "Comodo",
      required: true,
    },

    FurComDes: {
      type: String,
    },

    FurVlrIte: {
      type: Number,
      required: true,
    },

    FurVlrAre: {
      type: Number,
      default: 0,
    },

    FurVlrPer: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IFurniture>("Furniture", FurnitureSchema);
