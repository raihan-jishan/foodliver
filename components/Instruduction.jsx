import Wrapper from "@/global/wrapper";
import Image from "next/image";
import { CiCreditCard2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { InfoCard } from "./ui/card";
const Instruduction = () => {
  return (
    <Wrapper>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 mt-[40rem] max-lg:mt-[5rem]">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="  text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Who We Are & What We Do
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    fugiat, ipsa impedit nostrum dolorem a vero recusandae.
                    Facere, vero officiis.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-12 grid md:grid-cols-1 grid-cols-1 max-lg:gap-6 ">
           
                  <InfoCard 
                  title={'Best Product'}
                  icon={<FaCheck size={33}/>}
                  fancyBorder
                  /> 
                  <InfoCard 
                  title={'Online payment security'}
                  fancyBorder
                  icon={<CiCreditCard2 size={33}/>}
                  /> 
                  <InfoCard 
                  title={'100% Re-fund'}
                  fancyBorder
                  icon={<GiReceiveMoney size={33}/>}
                  /> 
                </div>
                
              </div>
            </div>
          
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <Image
                width={300}
                height={300}
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717742431.png"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Wrapper>
  );
};

export default Instruduction;
