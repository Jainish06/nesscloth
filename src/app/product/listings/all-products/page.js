import CommonListing from "@/components/CommonListings";
import { getAllProducts } from "@/services/product";

export default async function clientAllProducts() {
  const allProducts = await getAllProducts();

  return <CommonListing data={allProducts && allProducts.data} />
}
