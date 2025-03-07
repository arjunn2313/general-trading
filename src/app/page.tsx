import Image from "next/image";
import Hero from "./components/homepage/Hero";
import Features from "./components/homepage/Features";
import CategoryList from "./components/homepage/CategoryList";
import ProductHighlights from "./components/homepage/ProductHighlight";
import HouseKeepingproduct from "./components/homepage/HouseKeeping";
import HospitalityProducts from "./components/homepage/HospitalityProducts";
import CoffeeMachines from "./components/homepage/CofeeMachine";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CategoryList />
      <ProductHighlights />
      <HouseKeepingproduct />
      <HospitalityProducts/>
      <CoffeeMachines/>
    </>
  );
}
