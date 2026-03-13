import Room, { IRoom } from "../models/room.model";

interface IRoomInput {
  RooDes: string;
}

export const createRoom = async ({ RooDes }: IRoomInput): Promise<IRoom> => {
  const existingRoom = await Room.findOne({ RooDes });
  if (existingRoom) throw new Error("Room already exists");
  const room = new Room({ RooDes });
  return await room.save();
};
