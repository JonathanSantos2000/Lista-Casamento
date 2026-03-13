import { Router } from "express";
import * as roomController from "../controllers/room.controllers";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router: Router = Router();

router.post(
  "/register",
  authMiddleware,
  roleMiddleware([1]),
  roomController.register
);

export default router;
