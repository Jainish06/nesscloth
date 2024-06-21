import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { _id, fullName, address, city, country, postalCode } = data;
      const updateAddress = await Address.findOne(
        {
          _id: _id,
        },
        { fullName, address, city, country, postalCode },
        { new: true }
      );

      if (updateAddress) {
        return NextResponse.json({
          success: true,
          message: "Address updated successfully.",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to update address.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Not Authenticated.",
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
