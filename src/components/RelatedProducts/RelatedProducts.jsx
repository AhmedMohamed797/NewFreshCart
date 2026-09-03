import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "../../services/products.service";
import ProductCard from "../ProductCard/ProductCard";
import RelatedProductSkeleton from "./../Skeleton/RelatedProductSkeleton";

export default function RelatedProducts({ productDetails }) {
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = productDetails;

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        setIsLoading(true);
        const response = await getProducts({ category: category._id });

        if (response.success) {
          setIsLoading(false);
          setRelatedProducts(response.data.data);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }

    fetchRelatedProducts();
  }, [category._id]);

  if (isLoading) return <RelatedProductSkeleton />;

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="mb-4 text-2xl font-bold">You May Also Like</h2>
            <div className="flex items-center gap-2">
              <button className="related-prev-btn hover:text-primary-600 text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  className="text-3xl"
                />
              </button>
              <button className="related-next-btn hover:text-primary-600 text-gray-300 transition-colors duration-200">
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  className="text-3xl"
                />
              </button>
            </div>
          </div>
          <Swiper
            className="py-10!"
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              nextEl: ".related-next-btn",
              prevEl: ".related-prev-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
              1280: { slidesPerView: 5, spaceBetween: 15 },
            }}
          >
            {relatedProducts.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard productInfo={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
