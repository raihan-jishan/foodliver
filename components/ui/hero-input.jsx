import { IoLocationOutline } from "react-icons/io5";
import Button from "./button";

const HeroInput = () => {
  return (
    <form className="max-w-md mx-auto">
   
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoLocationOutline size={30} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-6 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your address for find local stalls "
          required
        />
        <div className="absolute end-2.5 bottom-2.5">
          <Button label={"Shop Now"} fontMedium roundedFull />
        </div>
      </div>
    </form>
  );
};

export default HeroInput;
