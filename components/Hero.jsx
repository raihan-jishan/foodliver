import HeroInput from "./ui/hero-input";
import HeroHeading from "./ui/heroHeading";
const Hero = ({ text, description }) => {
  return (
    <section className="mt-16 bg-[url('https://www.famooshed.co.uk/new-theme-2023/images/alten.jpg')] h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12  m-auto">
        <HeroHeading
          label={"Locally Produced Delivered Direct To Your Door"}
          description={" With Famooshed, you can get the best of British with seamless delivery or curb-side pick up"}
        />
        <HeroInput />
      </div>
    </section>
  );
};

export default Hero;
