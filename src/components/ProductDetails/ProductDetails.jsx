import { useParams } from "react-router";
import PageMetaTags from "../../pages/PageMetaTag/PageMetaTag";
import ProductInfo from "../ProductInfo/ProductInfo";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import useProductDetails from "./../../hooks/useProductDetails";
import ProductDetailsTabs from "./../ProductDetailsTabs/ProductDetailsTabs";
import ProductDetailsSkeleton from "./../Skeleton/ProductDetailsSkeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const { productDetails, isLoading } = useProductDetails(id);

  if (isLoading) return <ProductDetailsSkeleton />;

  return (
    <>
      <PageMetaTags
        title={`${productDetails.title} | FreshCart`}
        description={`FreshCart - Shop ${productDetails.title}. Premium quality fresh groceries with fast delivery and best prices.`}
      />
      <ProductInfo productDetails={productDetails} />
      <ProductDetailsTabs productDetails={productDetails} />
      <RelatedProducts productDetails={productDetails} />
    </>
  );
}
