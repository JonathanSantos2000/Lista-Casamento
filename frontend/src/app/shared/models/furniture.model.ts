export class Furniture {
  _id!: string;
  FurDes!: string;
  FurRooms!: IRoomInput[];

  FurVlrIte!: number;
  FurVlrAre!: number;
  FurVlrPer!: number;

  FurImg!: string;
}

interface IRoomInput {
  FurComId: string;
  FurComDes: string;
}
