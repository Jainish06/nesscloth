import connectToDB from "@/database";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export const dyanmic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await req.json();

    const {
      _id,
      name,
      price,
      description,
      category,
      sizes,
      deliveryInfo,
      onSale,
      priceDrop,
      imageUrl,
    } = extractData;

    const updatedProduct = await Product.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        name,
        price,
        description,
        category,
        sizes,
        deliveryInfo,
        onSale,
        priceDrop,
        imageUrl,
      },
      { new: true }
    );

    if(updatedProduct){
        return NextResponse.json({
            success : true,
            message : 'Product Updated successfully.'
        })
    }else{
        return NextResponse.json({
            success : false,
            message : 'Failed to update the product.'
        })
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later1",
    });
  }
}
