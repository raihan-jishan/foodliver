"use client";
import Button from "@/components/ui/button";
import { navLinks } from "@/constants";
import useClick from "@/hooks/useClick"; 
import { HiBars2 } from "react-icons/hi2";
import Logo from "../ui/logo";
import NavLink from "@/components/ui/navLink";
import { CiShop } from "react-icons/ci";

const Navbar = () => {
  const { click, handleClick, handleClose } = useClick();
  return (
    <nav className=" fixed  backdrop-blur-2xl w-full z-20 top-0 start-0      bg-[url('https://www.famooshed.co.uk/new-theme-2023/images/alten.jpg')]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-lg:p-3  max-lg:gap-3 ">
        <Logo />
        <div className="flex md:order-2 space-x-2  rtl:space-x-reverse gap-4 max-lg:gap-0">
          <Button label={"Order Now"} icon={<CiShop size={25} /> }/>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2  h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={handleClick}
          >
            <HiBars2 size={35} />
          </button>
        </div>
        <div
          className={
            click
              ? "items-center justify-between   w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden   w-full md:flex md:w-auto md:order-1"
          }
        >
          <ul className="   max-lg:rounded-xl  flex flex-col p-4 md:p-2 rounded-full mt-4 font-medium border      md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0      text-center">
            {navLinks.map((item, index) => {
              return (
                <NavLink key={index} label={item.label} path={item.route} />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
