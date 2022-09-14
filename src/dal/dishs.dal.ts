import Dish from "../db/models/dishs";


export class DishsDal {

    public createDish(dish: any) {
        dish = new Dish({
          ImgURL: dish.ImgURL,
          DishType: dish.DishType,
          name: dish.name,
          signature: dish.signature,
          price: dish.price
        });

        dish.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateDish(Dish:any) {
      const data = await Dish.findOne({
        name: Dish.name,
      }).updateOne({$set: {age: Dish.age,},})
        return data
      }


    public findAll(query: any = null) {
        return Dish.find(query);
      }
}


