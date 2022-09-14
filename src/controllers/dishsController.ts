import { Request, Response } from "express";
import { DishsService } from "../services/dishs.service";


export class DishsController {
    public static async getDishs(req: Request, res: Response) {
        const service = new DishsService();
        const chefs = await service.getDishs();
        return res.send(chefs);
    };

    public static async createDish(req: Request, res: Response) {
        const params = req.body;
        const service = new DishsService();
        const chef = await service.createDish(params);
        return res.send(chef);
    };

    public static async updateDish(req: Request, res: Response) {
        const params = req.body;
        const service = new DishsService();
        const chef = await service.updateChef(params);
        return res.send(chef);
    };
};