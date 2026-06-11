import type { Furniture } from "../models/furniture.model";

export interface FurniturePagination {
  furnitures: Furniture[];
  total: number;
  page: number;
  totalPages: number;
}