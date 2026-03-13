import type { Request, Response } from "express";
import * as roomService from "../services/room.services";
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const room = await roomService.createRoom(req.body);
    res.status(201).json(room);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
