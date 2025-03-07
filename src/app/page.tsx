import Hero from "./components/homepage/Hero";
import Features from "./components/homepage/Features";
import CategoryList from "./components/homepage/CategoryList";
import ProductHighlights from "./components/homepage/ProductHighlight";
import ProductList from "./components/homepage/ProductList";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CategoryList />
      <ProductHighlights />
      <ProductList category="HouseKeeping" />
      <ProductList category="Hospitality" />
      <ProductList category="Coffee Machines" />
    </>
  );
}
