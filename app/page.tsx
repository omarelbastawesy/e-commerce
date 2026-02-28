import Category from "@/components/home/Category";
import Deals from "@/components/home/Deals";
import Electronics from "@/components/home/Electronics";
import Features from "@/components/home/Features";
import HeroHome from "@/components/home/HeroHome";
import ShopByBrands from "@/components/home/ScrollBar";
import Togather from "@/components/home/Togather";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-between gap-6 ">
      <HeroHome />
      <Features />
      <ShopByBrands />
      <Deals />
      <Category />
      <Electronics />
      <Togather />
    </Container>
  );
}
