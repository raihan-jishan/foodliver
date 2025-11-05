import Wrapper from "@/global/wrapper";
import Image from "next/image";
import { IoPersonAddOutline } from "react-icons/io5";
import Button from "./ui/button";
import { TownCard } from "./ui/card";
const BestInTown = () => {
  return (
    <Wrapper className=" bg-emerald-600/0 p-8 mt-20">
      {/* heading */}
      <div className="flex items-center justify-between max-lg:flex-col  ">
        <div className="w-[42%] max-lg:w-full">
          <h1 className="text-5xl leading-tight font-extrabold font-manrope">
            We Always Provide You The Best In Town
          </h1>
        </div>

        <div className="w-[42%] max-lg:w-full max-lg:mt-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla non
            quasi esse ipsa aspernatur dignissimos eaque facilis optio soluta
            unde.
          </p>
        </div>
      </div>
      {/* image */}
      <div className="flex items-center justify-center p-4 mt-3 rounded-lg">
        <Image
          src={"/assets/image3.jpg"}
          className="max-lg:w-full max-lg:h-full"
          width={1500}
          height={300}
          alt="banner image was not found!"
        />
      </div>
      {/* bottom info */}
      <div className="flex items-center justify-evenly mt-16 max-lg:flex-col-reverse max-lg:mt-10 ">
        <div className="max-lg:mt-5">
          <Button
            label={"Partner with us"}
            icon={<IoPersonAddOutline size={30} />}
            fontMedium
            paddingMedium
            roundedFull
          />
        </div>

        <TownCard label={" Counties Served"} higligts={"48+"} />
        <TownCard label={"Served  Local Merchants"} higligts={"100K+"} />
        <TownCard label={" Product Categories"} higligts={"10K+"} />
      </div>
    </Wrapper>
  );
};

export default BestInTown;
