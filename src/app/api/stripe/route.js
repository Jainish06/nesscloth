import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const stripe = require("stripe")(
  "sk_test_51PXlb3Rxy3UtMi8lmYqszkNB3QnXKX6HvMuVKwN0dveCibOXNEPNQdG6bsqxluu4y4tAX9p0dSha6AuYzH0BJYNp00JOnqQPAC"
);

export async function POST(req) {
  try {
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const res = await req.json();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: res,
        mode: "payment",
        success_url: "http://localhost:3000/checkout" + "?status=success",
        cancel_url: "http://localhost:3000/checkout" + "?status=cancel",
      });

      return NextResponse.json({
        success: true,
        id: session.id,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Your are not authenticated.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
