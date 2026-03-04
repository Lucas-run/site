import { AboutSection } from "../features/landing/components/AboutSection";
import { PortfolioSection } from "../features/landing/components/PortfolioSection";
import { ServiceSection } from "../features/landing/components/ServiceSection";

export function Home() {
  return (
    <>
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
    </>
  );
}
