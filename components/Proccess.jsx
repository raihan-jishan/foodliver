import Image from "next/image";

const Proccess = () => {
  return (
    <div className=" ">
      {/* charector image */}
      <div className="">
        {" "}
        <Image
          src={"/assets/Character.png"}
          className="-m-[120px]
      ml-[68px] max-lg:hidden"
          alt="Character image was not found!"
          width={300}
          height={100}
        />
      </div>
      {/* food image and other */}

      <div className="relative mix-blend-lighten">
        <Image
          src={"/assets/image-1.png"}
          width={400}
          height={300}
          alt="BannerImage"
          className="absolute  w-full h-fit object-cover object-right "
        />
        <Image
          src="/assets/bag-cherry-tomatoes-background.png"
          alt="BannerImage"
          width={400}
          height={300}
          className="absolute  w-[100vh] max-lg:w-[20vh] object-cover object-right     mx-[25%] mt-2 max-lg:mx-[20%]"
        />
      </div>
    </div>
  );
};

export default Proccess;
