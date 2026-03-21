import Furniture, { IFurniture } from "../models/furniture.model";

interface IRoomInput {
  _Id: string;
}

interface IFurnitureInput {
  FurDes: string;
  FurRooms: IRoomInput[];

  FurVlrIte: number;
  FurVlrAre: number;
  FurVlrPer: number;

  FurImgPath: string;
  FurImgLocal: boolean;
}

export const createFurniture = async ({
  FurDes,
  FurRooms,
  FurVlrIte,
  FurVlrAre,
  FurVlrPer,
  FurImgPath,
  FurImgLocal,
}: IFurnitureInput): Promise<IFurniture> => {
  const existingFurniture = await Furniture.findOne({ FurDes });

  if (existingFurniture) throw new Error("Furniture already exists");
  const furniture = new Furniture({
    FurDes,
    FurRooms,
    FurVlrIte,
    FurVlrAre,
    FurVlrPer,
    FurImgPath,
    FurImgLocal,
  });
  return await furniture.save();
};
