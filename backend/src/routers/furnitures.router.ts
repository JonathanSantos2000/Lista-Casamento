import { Router } from "express";
import * as furnitureController from "../controllers/furniture.controllers";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

import { uploadFurnitureImage } from "../middleware/upload.middleware";

const router: Router = Router();

router.post(
  "/register",
  authMiddleware,
  roleMiddleware([1]),
  uploadFurnitureImage,
  furnitureController.register
);

router.get("/", furnitureController.getAllFurnitures);

export default router;
