import mongoose from 'mongoose';

const dishsSchema = new mongoose.Schema(
    {
    ImgURL:{
        type:String,
        required:true
    },
    DishType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    },
    { timestamps: true }
  );
  
const Dish = mongoose.model('Dish', dishsSchema);
  
export default Dish;

