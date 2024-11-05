import React from 'react'
import Image from 'next/image'
//define type of props
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  }
}

const SkillCard = ( { skill }: Props) => {
  const {  title, image, percent } = skill;
  return (
    <div className='hover:bg-blue-900 p-6 rounded-lg hover:scale-105 transition-all duration-300 text-center cursor-pointer bg-gray-900'>
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className='object-cover mx-auto'
      />
      <h1 className="text-[18px] text-lg text-white font-[600] mt-4">{title}</h1>
      <div className='bg-black mt-4 rounded-lg p-2 text-white opacity-40'>{percent}</div>

      
    </div>
  )
}

export default SkillCard
