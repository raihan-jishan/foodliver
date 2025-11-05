import Wrapper from "@/global/wrapper";
import { ImageCard } from "./ui/card";

const WorkASRider = () => {
  return (
    <Wrapper>
      {" "}
      <div className="mt-16">
        <h1 className="text-5xl text-gray-800   w-[44%] m-auto font-extrabold text-center max-lg:w-full max-lg:mt-12">
          Let&apos;s Work Together As Partner Or As Rider
        </h1>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          incidunt!
        </p>
      </div>
      {/* partner | Ride with us box */}
      <div className="  mt-6 p-4 flex items-center justify-center gap-8 max-lg:flex-col max-lg:gap-10">
        <ImageCard
          imageUrl={
            "https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
          }
          text={"Become a Merchant"}
          description={
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus consectetur"
          }
          varient={'merchant'}
        />

        <ImageCard
          imageUrl={"/assets/delivary.jpg "}
          text={"Become a Rider"}
          description={
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus consectetur"
          }
          varient={'rider'}
        />
      </div>
    </Wrapper>
  );
};

export default WorkASRider;
