import Wrapper from "@/global/wrapper";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlinePriceCheck } from "react-icons/md";
import { DealCard } from "./ui/card";
const ProvideBest = () => {
  return (
    <Wrapper className={"mt-16 p-10 bg-emerald-700 fancy-radius"} widthFull>
      <div>
        <h1 className="text-5xl text-gray-800   w-[44%] m-auto font-extrabold text-center max-lg:w-full max-lg:mt-12">
        We Always Provide You The Best In Town
        </h1>
      </div>

      {/* item card */}
      <div className="flex items-center justify-between p-3 mt-6 max-lg:flex-col max-lg:gap-4">
        <DealCard
          icon={<LuHeartHandshake size="39" />}
          title={"Great Daily Deal"}
          description={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore reprehenderit voluptatibus veniam nobis, officiis  "
          }
        />
        <DealCard
          icon={<CiDeliveryTruck size="39" />}
          title={"Free Delivary"}
          description={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore reprehenderit voluptatibus veniam nobis, officiis  "
          }
        />
        <DealCard
          icon={<MdOutlinePriceCheck size="39" />}
          title={"Best Prices Ever"}
          description={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore reprehenderit voluptatibus veniam nobis, officiis  "
          }
        />
      </div>
    </Wrapper>
  );
};

export default ProvideBest;
