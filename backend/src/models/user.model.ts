import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  UsuId: number;
  UsuNom: string;
  UsuEmail: string;
  UsuSen: string;
  UsuCar: number;
  UsuAti: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    UsuId: {
      type: Number,
      required: true,
      unique: true,
    },

    UsuNom: {
      type: String,
      required: true,
    },

    UsuEmail: {
      type: String,
      required: true,
      unique: true,
    },

    UsuSen: {
      type: String,
      required: true,
    },

    UsuCar: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },

    UsuAti: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", UserSchema);
