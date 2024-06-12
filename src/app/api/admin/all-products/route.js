import connectToDB from "@/database";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export const dyanmic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const user = "admin";

    if (user === "admin") {
        const extractProducts = await Product.find({})

        if(extractProducts){
            return NextResponse.json({
                success : true,
                data : extractProducts
            })
        }else{
            return NextResponse.json({
                success : false,
                status : 204,
                message : 'No products found.'
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
