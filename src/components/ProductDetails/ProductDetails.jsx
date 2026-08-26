import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services/products.service";
import Loading from "../Loading/Loading";
import ProductInfo from "../ProductInfo/ProductInfo";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import ProductDetailsTabs from "./../ProductDetailsTabs/ProductDetailsTabs";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProductById({ id });

        if (response.success) {
          console.log(response);
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

  if (isLoading) return <Loading />;

  return (
    <>
      <ProductInfo productDetails={productDetails} />
      <ProductDetailsTabs productDetails={productDetails} />
      <RelatedProducts productDetails={productDetails} />
    </>
  );
}
