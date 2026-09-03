import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services/products.service";
import ProductInfo from "../ProductInfo/ProductInfo";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import ProductDetailsTabs from "./../ProductDetailsTabs/ProductDetailsTabs";
import ProductDetailsSkeleton from "./../Skeleton/ProductDetailsSkeleton";
import PageMetaTags from "../../pages/PageMetaTag/PageMetaTag";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProductById({ id });

        if (response.success) {
          setIsLoading(false);
          setProductDetails(response.data.data);
        }
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

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
