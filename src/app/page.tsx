import CategoryList from "@/components/homepage/CategoryList";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import ProductHighlights from "@/components/homepage/ProductHighlight";
import ProductList from "@/components/homepage/ProductList";

 

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CategoryList />
      <ProductHighlights />
      <ProductList category="House Keeping" />
      <ProductList category="Home Furnishing" />
      <ProductList category="Coffee Machines" />
    </>
  );
}
