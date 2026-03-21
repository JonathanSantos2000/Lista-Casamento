import type { Request, Response } from "express";
import * as furnitureService from "../services/furniture.services";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const furniture = await furnitureService.createFurniture(req.body);
    res.status(201).json(furniture);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
