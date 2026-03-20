import type { Request, Response } from "express";
import * as roomService from "../services/room.services";
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("BODY:", req.body); // 👈 adiciona isso
    const room = await roomService.createRoom(req.body);
    res.status(201).json(room);
  } catch (error: any) {
    console.log("ERROR:", error.message); // 👈 e isso
    res.status(400).json({ error: error.message });
  }
};
