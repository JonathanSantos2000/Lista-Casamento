import { Request, Response, NextFunction } from "express";

export const roleMiddleware = (roles: number[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    
    const user = (req as any).user;
    console.log("USER:", user);
    console.log("ROLE:", user.UsuCar);
    console.log("ALLOWED:", roles);

    if (!roles.includes(user.role)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  };
};
