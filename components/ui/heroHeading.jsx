const HeroHeading = ({ label, description }) => {
  return (
    <div>
      <h1 className="mb-4 text-center  font-extrabold w-[40%] tracking-tight  m-auto text-green-950 text-[3.2rem] leading-[4rem] max-lg:text-[3rem] max-lg:mt-10 max-lg:w-full max-lg:leading-none">
        {label}
      </h1>
      <p className="mb-8 text-base font-normal   sm:px-16 xl:px-48 text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default HeroHeading;
