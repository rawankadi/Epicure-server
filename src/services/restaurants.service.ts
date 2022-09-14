import { ChefsDal } from "../dal/chefs.dal";
import { RestaurantsDal } from "../dal/restaurants.dal";


export class RestaurantsService {

    public async getRestaurants() {
        const dal = new RestaurantsDal();
        const res = await dal.findAll();
            return res;
    }
    //     const ResponseFromDB =[
    //         {
    //             name:'Burger',
    //             chef: 'ray',
    //         },
    //         {
    //             name:'Sushi',
    //             chef:'moshi',
    //         },
    //     ]
    //     return ResponseFromDB;
            
    // };


    public async createRestaurant(restaurant:any) {
        const dal = new RestaurantsDal();
        const res = dal.createRestaurant(restaurant);
        return res;
    };

    public async updateRestaurant(restaurant:any) {
        const dal = new RestaurantsDal();
        const res = await dal.updateRestaurant(restaurant);
        return res;
    };
};