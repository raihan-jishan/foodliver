import Image from "next/image";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const StayHome = () => {
  const btnStyle =
    "bg-black text-white font-medium p-4 px-6 text-xl rounded-full hover:bg-black/90 flex gap-3 cursor-pointer text-center items-center justify-center";

  return (
    <section className="w-[90%] m-auto custom-bg mt-16">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-center shadow-md shadow-black max-lg:flex-col-reverse">
        
        {/* TEXT SECTION */}
        <div className="shadow-md shadow-black/10 p-4 md:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight">
            Stay Home & Get All Your Essentials From Our Market!
          </h1>
          <p className="mt-4 text-lg text-gray-900">
            Download the app now from App Store or Google Play.
          </p>

          <div className="flex mt-4 gap-3 max-lg:flex-col">
            <div className={btnStyle}>
              <FaAppStore size={30} className='text-emerald-400'/> App Store
            </div>
            <div className={btnStyle}>
              <IoLogoGooglePlaystore size={30} className='text-emerald-400' /> Google Play Store
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/assets/image-4.png"
              alt="Stay home and order essentials"
              fill
              className="object-contain rounded-lg mix-blend-multiply  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayHome;
