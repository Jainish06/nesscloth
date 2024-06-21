import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewAddressSchema = Joi.object({
  fullName: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  postalCode: Joi.string().required(),
  userID: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const extractData = await req.json();
      const { fullName, address, city, country, postalCode, userID } =
        extractData;
      const { error } = AddNewAddressSchema.validate({
        fullName,
        address,
        city,
        country,
        postalCode,
        userID,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newAddress = await Address.create(extractData);
      if (newAddress) {
        return NextResponse.json({
          success: true,
          message: "Address added successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to add the address ! please try again",
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
      message: "Something went wrong ! Please try again later",
    });
  }
}
