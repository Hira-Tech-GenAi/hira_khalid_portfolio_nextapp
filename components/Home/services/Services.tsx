import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/data/data";
import ServiceCard from "./ServiceCard";
import React from "react";

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto mt-20 items-center]">
        {servicesData.map((service, i) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 100}
            >
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
