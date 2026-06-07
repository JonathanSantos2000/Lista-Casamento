import type { Request, Response } from "express";
import * as furnitureService from "../services/furniture.services";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const file = req.file;

    const payload = {
      FurDes: req.body.FurDes,
      FurRooms: JSON.parse(req.body.FurRooms),
      FurVlrIte: Number(req.body.FurVlrIte),
      FurVlrAre: 0,
      FurVlrPer: 0,
      FurImg: file?.filename || "",
    };
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);
    
    const furniture = await furnitureService.createFurniture(payload);

    res.status(201).json(furniture);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
