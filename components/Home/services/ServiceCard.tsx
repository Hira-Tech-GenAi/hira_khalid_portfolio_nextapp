"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
// define props type
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced]'>
      <Image
        src={`${service.icon}`}
        alt={service.title}
        width={50}
        height={50}
      />
      <h1 className="text-lg text-gray-100 font-bold mt-4">{service.title}</h1>
      <p className="mt-4 text-sm text-white text-opacity-80">{service.description}</p>
    </Tilt>
  )
}

export default ServiceCard
