import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/data/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto mt-20 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 150}
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project image"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
