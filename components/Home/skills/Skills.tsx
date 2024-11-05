import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/data/data'
import React from 'react'
import SkillCard from "@/components/Home/skills/SkillCard";

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715] '>
      <SectionHeading> My Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grids-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 gap-4 items-center '>
        {skillsData.map((skill, i)=>{
          return (
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 150}
              key={skill.id}
              className="bg-blue-900 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}

      </div>
    </div>
  )
}

export default Skills
