import { ChefsDal } from "../dal/chefs.dal";


export class ChefsService {

    public async getChefs() {
        const dal = new ChefsDal();
        const res = await dal.findAll();
        return res;
        // const ResponseFromDB =[
        //     {
        //         name:'yossi',
        //         age: '44',
        //     },
        //     {
        //         name:'moshe',
        //         age:'30',
        //     },
        // ]
        // return ResponseFromDB;
            
    };

    public async createChef(chef:any) {
        const dal = new ChefsDal();
        const res = dal.createChef(chef);
        return res;
    };

    public async updateChef(chef:any) {
        const dal = new ChefsDal();
        const res = await dal.updateChef(chef);
        return res;
    };
};