import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL.apply(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Address ID required.",
      });
    }

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const deleteAddress = await Address.findByIdAndDelete(id);

      if (deleteAddress) {
        return NextResponse.json({
          success: true,
          message: "Address deleted succesfully.",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to delete address.",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
