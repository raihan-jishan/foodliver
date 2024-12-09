import Wrapper from "@/global/wrapper";
import Image from "next/image";
import { IoPersonAddOutline } from "react-icons/io5";
import Button from "./ui/button";
const BestInTown = () => {
  return (
    <Wrapper className="mt-5  bg-emerald-600/0 p-8">
      {/* heading */}
      <div className="flex items-center justify-between max-lg:flex-col  ">
        <div className="w-[42%] max-lg:w-full">
          <h1 className="text-5xl leading-tight font-extrabold">
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
        

        <div className="w-[20%] max-lg:w-full max-lg:p-2 max-lg:flex max-lg:items-center max-lg:justify-center  ">
          <h1 className="text-3xl font-extrabold max-lg:text-xl  ">
            <span className="">48</span> Counties Served
          </h1>
        </div>
        <div className="w-[20%] max-lg:w-full max-lg:p-2 max-lg:flex max-lg:items-center max-lg:justify-center  ">
          <h1 className="text-3xl font-extrabold max-lg:text-xl  ">
            Served <span className="text-emerald-600">100+ </span> Local
            Merchants
          </h1>
        </div>

        <div className="w-[20%] max-lg:w-full max-lg:p-2 max-lg:flex max-lg:items-center max-lg:justify-center  ">
          <h1 className="text-3xl font-extrabold max-lg:text-xl  ">
            <span className="text-emerald-600">100+</span> Product Categories
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default BestInTown;
