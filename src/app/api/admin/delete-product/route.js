import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export const dyanmic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    
    if (isAuthUser?.role === "Admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({ success: false, message: "Id missing." });

      const deletedProduct = await Product.findOneAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Product Deleted successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete product.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not autorized !",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later1",
    });
  }
}
