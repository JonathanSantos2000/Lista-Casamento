import Furniture, { IFurniture } from "../models/furniture.model";

interface IRoomInput {
  FurComId: string;
  FurComDes: string;
}

interface IFurnitureInput {
  FurDes: string;
  FurRooms: IRoomInput[];

  FurVlrIte: number;
  FurVlrAre: number;
  FurVlrPer: number;
  FurImg: string;
}

export const createFurniture = async ({
  FurDes,
  FurRooms,
  FurVlrIte,
  FurVlrAre,
  FurVlrPer,
  FurImg,
}: IFurnitureInput): Promise<IFurniture> => {
  const existingFurniture = await Furniture.findOne({ FurDes });

  if (existingFurniture) throw new Error("Furniture already exists");

  const furniture = new Furniture({
    FurDes,
    FurRooms,
    FurVlrIte,
    FurVlrAre,
    FurVlrPer,
    FurImg,
  });
  return await furniture.save();
};
