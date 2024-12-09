import Image from "next/image";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const StayHome = () => {
  // define styling
  const btnStyle =
    "bg-emerald-500 p-4 px-6 text-xl rounded-full hover:bg-emerald-800 flex gap-3 cursor-pointer text-center item-center justify-center";
  return (
    <section className="w-[90%]   m-auto custom-bg mt-6">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-center  shadow-md shadow-black max-lg:flex-col-reverse">
        <div className="shadow-md shadow-black/10 p-2 md:w-1/2">
          <h1 className="text-5xl font-extrabold  leading-tight">
            Stay Home & Get All Your Essentials From Our Market!
          </h1>
          <p className="mt-4 text-lg text-gray-900  ">
            Download the app now From App Store or Google Play
          </p>
          {/* app icons */}
          <div className="flex mt-4 gap-3  max-lg:flex-col">
            <div className={btnStyle}>
              <FaAppStore size={30} /> App store
            </div>{" "}
            <div className={btnStyle}>
              <IoLogoGooglePlaystore size={30} /> Google play store
            </div>
          </div>
        </div>

        <Image
          alt="Person thinking with TRYING FLOWBITE text"
          className="rounded-lg mix-blend-multiply shadow-md shadow-black"
          height="400"
          src={"/assets/image-4.png"}
          width="500"
        />
      </div>
    </section>
  );
};

export default StayHome;
