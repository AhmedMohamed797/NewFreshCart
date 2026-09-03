import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import PageMetaTags from "../PageMetaTag/PageMetaTag";

export default function Home() {
  return (
    <>
      <PageMetaTags
        title="Home | FreshCart"
        description="FreshCart - Home for fresh groceries and daily essentials. Shop top deals, premium quality products, and get same-day delivery."
      />
      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals />
      <FeaturedProducts />
    </>
  );
}
