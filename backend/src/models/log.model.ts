import { Schema, model, Document, Types } from "mongoose";

export interface ILog extends Document {
  LogId: number;
  LogUsuId?: Types.ObjectId;
  LogDat: Date;
  LogDatHor?: string;
  LogObs?: string;
}

const LogSchema = new Schema<ILog>(
  {
    LogId: {
      type: Number,
      required: true,
      unique: true,
    },

    LogUsuId: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },

    LogDat: {
      type: Date,
      default: Date.now,
    },

    LogDatHor: {
      type: String,
    },

    LogObs: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default model<ILog>("Log", LogSchema);
