import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715] ">
      <div>
        <Image
          src="/images/h_logo.png"
          alt="image"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>

      <div className="flex items-center justify-center flex-wrap space-x-10  space-y-4 text-white font-bold">
        <div>Home</div>
        <div>Services</div>
        <div>Project</div>
        <div>Review</div>
        <div>Contact</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center ">
        Copyright © 2024. All Rights Reserved By Hira Khalid💗.
      </p>
    </div>
  );
};

export default Footer;
