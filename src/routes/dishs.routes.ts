import { Router } from "express";
import { DishsController } from "../controllers/dishsController";

    const router = Router();
    router.get("/getDish", DishsController.getDishs);
    router.post("/createDish", DishsController.createDish);
    router.post("/updateDish", DishsController.updateDish);

export default router;