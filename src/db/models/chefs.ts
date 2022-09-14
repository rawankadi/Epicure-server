import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
    {
      PictureURL: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      restaurants: {
        type: [],
        required: true
      },

    },
    { timestamps: true }
  );
  
const Chef = mongoose.model('Chef', chefsSchema);
  
export default Chef;

