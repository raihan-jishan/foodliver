import Wrapper from "@/global/wrapper";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuHeartHandshake } from "react-icons/lu"; 
import {FaMoneyBillWheat} from 'react-icons/fa6'
import { DealCard } from "./ui/card";
import { MdAttachMoney } from "react-icons/md";
const ProvideBest = () => {
  return (
    <Wrapper
      className={"mt-[40rem] max-lg:mt-[10rem] p-10 bg-gray-100 fancy-radius"}
      widthFull
    >
      {/* item card */}
      <div className="flex items-center justify-between p-3 mt-6  max-lg:flex-col max-lg:gap-4">
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
          icon={<MdAttachMoney  size={39}  />}
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
