import Room, { IRoom } from "../models/room.model";

interface IRoomInput {
  RooNom: string;
}

export const createRoom = async ({ RooNom }: IRoomInput): Promise<IRoom> => {
  const existingRoom = await Room.findOne({ RooNom });
  if (existingRoom) throw new Error("Room already exists");
  const room = new Room({ RooNom });
  return await room.save();
};
