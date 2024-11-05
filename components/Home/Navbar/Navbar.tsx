"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type
type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBG, setNavBG] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBG(true);
      }
      if (window.scrollY < 90) {
        setNavBG(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBG ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10] w-full  transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto text-w">
        {/* Logo */}
        <Image
          src="/images/h_logo.png"
          alt="logo"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Links */}
        <div className="flex items-center space-x-10 ">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link href={navlink.url} key={navlink.id}>
                  <p className="nav_link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>

          {/* Button */}
          <div className="flex items-center">
            <button className="md:px-10 md:py-3 px-5 py-3 text-blue-800 font-semibold sm:text-base text-sm b bg-white hover:bg-yellow-400 duration-200 transition-all rounded-lg">
              Hire Me
            </button>

            {/*Burger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer lg:hidden text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
