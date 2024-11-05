import { personalInfo } from "@/data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import jsPDF from "jspdf";

const Hero = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set title
    doc.setFontSize(22);
    doc.text("Hira Khalid", 20, 20);

    // Add contact info
    doc.setFontSize(12);
    doc.text("Email: hirakhalidgd123@gmail.com", 20, 30);
    doc.text("Phone: 03333604659", 20, 40);

    // Add Education
    doc.setFontSize(16);
    doc.text("Education", 20, 60);
    doc.setFontSize(12);
    doc.text("- Graduation in Arts", 20, 70);
    doc.text("- Intermediate (Pre-Engineering)", 20, 80);
    doc.text("- Matriculation (Science)", 20, 90);

    // Add Professional Development
    doc.setFontSize(16);
    doc.text("Professional Development", 20, 110);
    doc.setFontSize(12);
    doc.text(
      "Currently pursuing Generative Cloud Native AI certification from PIAIC and GIAIC",
      20,
      120
    );

    // Add Skills and Interests
    doc.setFontSize(16);
    doc.text("Skills and Interests", 20, 140);
    doc.setFontSize(12);
    doc.text("- Coding", 20, 150);
    doc.text("- Watching science fiction movies", 20, 160);
    doc.text("- Watching informative shows", 20, 170);
    doc.text("- Traveling", 20, 180);

    // Save the PDF
    doc.save("Hira_Khalid_CV.pdf");
  };

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          {/* content */}
          <div>
            {/* Subtitle */}
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {personalInfo.name}
            </h1>

            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.rem] lg:leading-[3.5rem] xl:leading-[4.rem]"
            >
              {personalInfo.position}
            </h1>

            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-white-300 text-sm md:text-base mt-6 text-opacity-60"
            >
              {personalInfo.description}
            </p>

            {/* Download Button */}
            <button
              onClick={generatePDF}
              data-aos="zoom-in"
              data-aos-delay="300"
              className="mt-8 md:px-3 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>

          {/* Image */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden"
          >
            <Image
              src={personalInfo.profilePic}
              alt={personalInfo.name}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
