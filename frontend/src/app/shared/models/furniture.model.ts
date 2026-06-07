export class Furniture {
  _id!: string;
  FurDes!: string;
  FurRooms!: IRoomInput[];

  FurVlrIte!: number;
  FurVlrAre!: number;
  FurVlrPer!: number;

  FurImgPath!: string;
  FurImgLocal!: boolean;
}

interface IRoomInput {
  _Id: string;
}
