import React from 'react';
import Navbar from '../components/Navbar';
import cover from '../../../public/cover.webp'; // Ensure the path to the image is correct
import Image from 'next/image';


const HeroSection = () => {
    return (
        <div className="relative h-screen ">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
                src={cover}
                alt="cover"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <div className='absolute w-full top-0 inset-0 bg-gradient-to-b from-white via-white/50 to-transparent h-1/3'>
                <Navbar />
            </div>
            <div className="absolute w-full top-1/3 z-50 mb-40">
                <h1 className="text-5xl mx-80 tracking-widest  font-serif text-center text-white">
                    Explore the <span className='font-bold text-orange-500'>World</span> Without Worry – We've Got Your <span className='font-bold text-red-500'>Visa</span> Covered!
                </h1>
            </div>
            <div className="absolute w-full top-2/3 z-30 ">
                <p className='text-white text-lg text-center mx-96'>Discover the world with Bestination Holidays – crafting unforgettable experiences across all seven continents</p>
            </div>
        </div>
    );
};

export default HeroSection;
