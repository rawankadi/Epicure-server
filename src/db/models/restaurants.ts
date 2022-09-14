import mongoose from 'mongoose';

const restaurantsSchema = new mongoose.Schema(
    {
      URLImage: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      chefName: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      dishes: {
        type: [],
        required: true
      },

    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

