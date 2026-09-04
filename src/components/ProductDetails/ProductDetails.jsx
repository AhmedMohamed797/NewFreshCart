import { useParams } from "react-router";
import PageMetaTags from "../../pages/PageMetaTag/PageMetaTag";
import ErrorState from "../ErrorState/ErrorState";
import ProductInfo from "../ProductInfo/ProductInfo";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import useProductDetails from "./../../hooks/useProductDetails";
import ProductDetailsTabs from "./../ProductDetailsTabs/ProductDetailsTabs";
import ProductDetailsSkeleton from "./../Skeleton/ProductDetailsSkeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const { productDetails, isLoading, isError, error, refetch } =
    useProductDetails(id);

  if (isLoading) return <ProductDetailsSkeleton />;

  if (isError)
    return (
      <ErrorState
        message={`We couldn't load this product. ${error?.message ?? ""}`}
        onRetry={refetch}
      />
    );

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
