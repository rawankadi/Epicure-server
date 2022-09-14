import { DishsDal } from "../dal/dishs.dal";


export class DishsService {

    public async getDishs() {
        const dal = new DishsDal();
        const res = await dal.findAll();
            return res;
        // const ResponseFromDB =[
        //     {
        //         name:'pizza',
        //         chef: 'ray',
        //     },
        //     {
        //         name:'Onza',
        //         chef:'moshi',
        //     },
        // ]
        // return ResponseFromDB;
            
    };

    public async createDish(Dish:any) {
        const dal = new DishsDal();
        const res = dal.createDish(Dish);
        return res;
    };

    public async updateChef(Dish:any) {
        const dal = new DishsDal();
        const res = await dal.updateDish(Dish);
        return res;
    };
};