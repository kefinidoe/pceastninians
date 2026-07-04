import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { MissionSection } from "@/components/home/MissionSection";
import { MinistryCarousel } from "@/components/home/MinistryCarousel";
import { MinisterMessage } from "@/components/home/MinisterMessage";
import { LearningPrograms } from "@/components/home/LearningPrograms";
import { Announcements } from "@/components/home/Announcements";
import { SermonPreview } from "@/components/home/SermonPreview";
import { GivingCTA } from "@/components/home/GivingCTA";
import { ConnectCTA } from "@/components/home/ConnectCTA";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO title="PCEA St. Ninians Nakuru - Worship Services & Community" description="Welcoming Presbyterian church near Nakuru CBD with English (8:30 AM) and Kiswahili (10:30 AM) Sunday services, ministries, and fellowship." path="/" />
      {/* SEO H1 for local search - visually hidden but readable by search engines */}
      <h1 className="sr-only">
        PCEA St. Ninians Church, Nakuru — Best Church in Nakuru CBD with English and Kiswahili Sunday Services
      </h1>
      <HeroSlider />
      <MissionSection />
      <MinistryCarousel />
      <MinisterMessage />
      <LearningPrograms />
      <Announcements />
      <SermonPreview />
      <GivingCTA />
      <ConnectCTA />
    </Layout>
  );
};

export default Index;
