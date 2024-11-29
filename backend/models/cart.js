import mongoose from 'mongoose';
const {Schema} = mongoose

const cartSchema = new Schema({
  userID: {
    type: Number,
    required: true,
  },
  products: [
    {
      productID: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: { type: Number, required: true, default: 0 },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
