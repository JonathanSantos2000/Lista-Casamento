export interface IFurnRegister {
  FurDes: string;
  FurRooms: IRoomInput[];

  FurVlrIte: number;
  FurVlrAre: number;
  FurVlrPer: number;

  FurImgPath: string;
  FurImgLocal: boolean;
  
  _id: string;
  UsuCar: Number;
}

interface IRoomInput {
  _Id: string;
}
