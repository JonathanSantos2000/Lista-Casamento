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
    const furniture = await furnitureService.createFurniture(payload);

    res.status(201).json(furniture);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllFurnitures = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const furnitures = await furnitureService.getAllFurnitures({ skip, limit });

    const total = await furnitureService.countFurnitures();

    res.status(200).json({
      furnitures,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
