import HeroInput from "./ui/hero-input";
const Hero = ({
  text,
  description,
  firstBtnIcon,
  secondBtnIcon,
  firstBtnText,
  secondBtnText,
  imagePath,
  path,
}) => {
  return (
    <section className="mt-16 bg-[url('https://www.famooshed.co.uk/new-theme-2023/images/alten.jpg')] h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12  m-auto">
        <h1 className="mb-4 text-center  font-extrabold w-[36%]  tracking-tight  m-auto text-green-950 text-[3.2rem] leading-[4rem] max-lg:text-[3rem] max-lg:mt-10 max-lg:w-full max-lg:leading-none">
          {text}
        </h1>
        <p className="mb-8 text-base font-normal   sm:px-16 xl:px-48 text-gray-500">
          {description}
        </p>
        <HeroInput />
      </div>
    </section>
  );
};

export default Hero;
