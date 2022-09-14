import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {

    public async createRestaurant(restaurant: any) {
        restaurant = new Restaurants({
          URLImage: restaurant.URLImage,
          name: restaurant.name,
          chefName: restaurant.chefName,
          status: restaurant.status,
          dishes: restaurant.dishes
        });

        const response = await Restaurants.create(restaurant)
        return response;
    }

    public async updateRestaurant(restaurant:any) {
      await Restaurants.findOne({
        name: restaurant.name,
      }).updateOne({$set: {chef: restaurant.chef,}});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }


    public findAll() {
        return Restaurants.find();
    }
}


