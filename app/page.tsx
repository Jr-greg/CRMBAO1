import { Hero } from "@/components/home/hero";
import { Stepper } from "@/components/home/stepper";
import { ExchangeCards } from "@/components/home/exchange-cards";
import { CourseCards } from "@/components/home/course-cards";
import { FeaturedArticlesSection } from "@/components/home/tools-section";
import { DisclosureSection } from "@/components/home/disclosure-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stepper />
      <ExchangeCards />
      <CourseCards />
      <FeaturedArticlesSection />
      <DisclosureSection />
    </>
  );
}


