import CommonListing from "@/components/CommonListings";
import { productByCategory } from "@/services/product";

export default async function womenAllProducts() {
  const allProducts = await productByCategory("women");

  return <CommonListing data={allProducts && allProducts.data} />
}
