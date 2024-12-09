import BestInTown from "@/components/BestInTown";
import Hero from "@/components/Hero";
import Instruduction from "@/components/Instruduction";
import Proccess from "@/components/Proccess";
import ProvideBest from "@/components/ProvideBest";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import StayHome from "@/components/StayHome";
import WorkASRider from "@/components/WorkASRider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        text={"Locally Produced Delivered Direct To Your Door"}
        description={
          " With Famooshed, you can get the best of British with seamless delivery or curb-side pick up"
        }
        firstBtnText={"Get Started"}
        path={"/getstart"}
        secondBtnText={"watch vedio"}
        imagePath={"/assets/third.png"}
      />
      <Proccess /> 
      <Instruduction /> 
      <BestInTown /> 
      <StayHome />
      <ProvideBest />
      <WorkASRider /> 
      <Footer />
    </div>
  );
}
