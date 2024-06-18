import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        userID:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        productID:{
            tpye : mongoose.Schema.Types.ObjectId,
            ref : 'Products'
        },
        quantity:{
            type : Number,
            required : true,
            default : 1
        }
    },{timestamps : true}
);

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema)
export default Cart;