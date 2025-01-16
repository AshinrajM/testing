import React from 'react';
import Navbar from '../components/Navbar';
import cover from '../../../public/cover.webp'; // Ensure the path to the image is correct
import Image from 'next/image';


const HeroSection = () => {
    return (
        <div className="relative h-screen ">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image
                src={cover}
                alt="cover"
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
            />
            <div className='absolute w-full top-0 inset-0 bg-gradient-to-b from-white via-white/50 to-transparent h-1/3'>
                <Navbar />
            </div>
        </div>
    );
};

export default HeroSection;
