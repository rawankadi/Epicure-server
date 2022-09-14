import Chef from "../db/models/chefs";


export class ChefsDal {

    public createChef(chef: any) {
        chef = new Chef({
          PictureURL: chef.PictureURL,
          name: chef.name,
          description:chef.description,
          restaurants:chef.restaurants,
        });

        chef.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateChef(chef:any) {
      const data = await Chef.findOne({
        name: chef.name,
      }).updateOne({$set: {age: chef.age,},})
        return data
      }


    public findAll(query: any = null) {
        return Chef.find(query);
      }
}


