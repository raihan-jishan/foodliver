import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GrNetworkDrive } from "react-icons/gr";
import Button from "./button";
export const InfoCard = ({ title, icon, description, fancyBorder }) => {
  return (
    <div
      className={`flex items-center justify-between gap-8 bg-gradient-to-r from-emerald-500 shadow-lg shadow-emerald-800 to-emerald-900/50 p-8   transition-all ${
        fancyBorder ? "fancy-radius" : "rounded-xl"
      }`}
    >
      <div className="bg-black/70 rounded-full text-gray-300 p-2">{icon}</div>
      <div className=" ">
        <h1 className="text-2xl  font-extrabold">{title}</h1>
        <p className=" ">
          {description
            ? description
            : " Lorem ipsum dolor sit amet consectetur adipisicing elit."}{" "}
        </p>
      </div>
      <div>
        <FaRegArrowAltCircleRight size={30} />
      </div>
    </div>
  );
};

// deal card
export const DealCard = ({icon, title, description}) => {
  return (
    <div class="max-w-sm p-4 rounded-[2rem] bg-gray-600  shadow-black/20 shadow-2xl">
       <div className="bg-emerald-400/70  rounded-full w-12 p-1">{icon}</div>
      <a href="#">
        <h5 class="mb-2 mt-2 text-2xl  font-semibold tracking-tight text-gray-900 dark:text-black">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      {description}
      </p> 
    </div>
  );
};

// Image card
export const ImageCard = ({ imageUrl, text, description }) => {
  return (
    <div className=" w-[45%]  bg-emerald-50 rounded overflow-hidden shadow-lg max-lg:w-full">
      <Image className="w-full h-fit " src={imageUrl} width={500} height={400} alt="image was not found!" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{text}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="  ">
        <Button fontMedium heroPadding label={"Work with Us"} roundedMedium icon={<GrNetworkDrive size={26}/>}  />
      </div>
    </div>
  );
};
