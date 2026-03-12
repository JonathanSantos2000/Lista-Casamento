import { Schema, model, Document, Types } from "mongoose";

export interface ICotacao extends Document {
  CotId: number;
  CotUsuId: Types.ObjectId;
  CotObjId: Types.ObjectId;
  CotVlr: number;
}

const CotacaoSchema = new Schema<ICotacao>(
  {
    CotId: {
      type: Number,
      required: true,
      unique: true,
    },

    CotUsuId: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    CotObjId: {
      type: Schema.Types.ObjectId,
      ref: "Objeto",
      required: true,
    },

    CotVlr: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<ICotacao>("Cotacao", CotacaoSchema);
