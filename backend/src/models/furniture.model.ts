import { Schema, model, Document, Types } from "mongoose";

interface Rooms {
  FurComId: Types.ObjectId;
  FurComDes: string;
}

export interface IFurniture extends Document {
  FurDes: string;
  FurRooms: Rooms[];

  FurVlrIte: number;
  FurVlrAre: number;
  FurVlrPer: number;

  FurImgPath: string;
  FurImgLocal: boolean;
}

const FurnitureSchema = new Schema<IFurniture>(
  {
    FurDes: {
      type: String,
      required: true,
    },
    FurRooms: [
      {
        FurComId: {
          type: Schema.Types.ObjectId,
          ref: "Rooms",
          required: true,
        },

        FurComDes: {
          type: String,
          required: true,
        },
      },
    ],

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
    FurImgPath: {
      type: String,
      required: true,
    },
    FurImgLocal: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IFurniture>("Furniture", FurnitureSchema);
