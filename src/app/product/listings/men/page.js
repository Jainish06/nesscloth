import CommonListing from "@/components/CommonListings";
import { productByCategory } from "@/services/product";

export default async function menAllProducts() {
  const allProducts = await productByCategory("men");

  return <CommonListing data={allProducts && allProducts.data} />
}
