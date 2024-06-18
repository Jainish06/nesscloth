import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Joi from "joi";

const AddToCart = Joi.object({
  userID: Joi.string().required(),
  productID: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { productID, userID } = data;

      const { error } = AddToCart.validate({ userID, productID });

      if (error) {
        const isCartItemExists = await Cart.find({
          productID: productID,
          userID: userID,
        });

        if (isCartItemExists) {
          return NextResponse.json({
            success: false,
            message: "Product already in cart.",
          });
        }

        const saveItemToCart = await Cart.create(data);

        if (saveItemToCart) {
          return NextResponse.json({
            success: true,
            message: "Product added to cart.",
          });
        } else {
          return NextResponse.json({
            success: false,
            message: "Failed to add item to cart.",
          });
        }
      } else {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authorized!",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
