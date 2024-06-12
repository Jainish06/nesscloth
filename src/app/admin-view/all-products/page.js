import CommonListing from "@/components/CommonListings";
import { getAllProducts } from "@/services/product";

export default async function AllProducts() {
  const allProducts = await getAllProducts();
  console.log(allProducts);

  return <CommonListing data={allProducts && allProducts.data}/>;
}
