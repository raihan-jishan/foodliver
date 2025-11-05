import BestInTown from "@/components/BestInTown";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProvideBest from "@/components/ProvideBest";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import StayHome from "@/components/StayHome";
import WorkASRider from "@/components/WorkASRider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Process />
      <ProvideBest />
      <BestInTown />
      <StayHome />
      <WorkASRider />
      <Footer />
    </div>
  );
}
