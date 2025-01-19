'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import cover from '../../../public/cover.webp';
import publicIcon from "../../../public/public-service.svg";
import calendarIcon from "../../../public/calendar.svg";
import locationIcon from "../../../public/location.svg";
import daynightIcon from "../../../public/daynight.svg";
import right from "../../../public/right.svg";
import left from "../../../public/left.svg";
import asia from "../../../public/asia.webp";
import cover2 from "../../../public/carouselLower.webp";
import Image from 'next/image';
import Link from 'next/link';



const HeroSection = () => {

    const cards = [

        { id: 1, image: asia, title: "ASIA" },
        { id: 2, image: cover, title: "Card 2" },
        { id: 3, image: cover, title: "Card 3" },
        { id: 4, image: cover2, title: "Card 4" },
        { id: 5, image: cover2, title: "Card 4" },
        { id: 6, image: cover2, title: "Card 4" },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    const visibleCards = (() => {
        const initial = cards.slice(currentIndex);
        if (initial.length < 3) {
            return [...initial, ...cards.slice(0, 3 - initial.length)];
        }
        return initial.slice(0, 3);
    })();

    // Calculate progress based on current position
    const calculateProgress = () => {
        // Calculate what percentage each card represents
        const percentPerCard = 100 / cards.length;
        // Calculate current progress
        const progress = (currentIndex + 1) * percentPerCard;
        return Math.min(100, Math.max(0, progress)); // Ensure between 0 and 100
    };

    const progressPercentage = calculateProgress();

    console.log("progreessss", progressPercentage);

    return (
        <>

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

            {/* searchForm */}
            <section className="bg-gray-100 flex flex-col justify-start p-5 m-20 shadow-xl rounded-[20px]">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        Find Your Dream Destination
                    </h2>
                    <p className="text-gray-600">
                        International and domestic tours from Kerala. Packages to all the 7
                        continents.
                    </p>
                </div>

                <div className="flex gap-5 justify-between items-center">
                    <div className="w-auto">
                        <div className="mb-4">
                            <div className="flex items-center justify-start gap-2 h-[14px] mb-2">
                                <Image src={locationIcon} alt="loc" />
                                <label
                                    htmlFor="location-1"
                                    className="block font-medium text-gray-700"
                                >
                                    Location
                                </label>
                            </div>
                            <input
                                type="text"
                                id="location-1"
                                name="location-1"
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search for your dream destination"
                                size={28} /* Adjust this value based on the placeholder length */
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="mb-4">
                            <div className="flex items-center justify-start gap-2 h-[14px] mb-2">
                                <Image src={locationIcon} alt="loc" />
                                <label
                                    htmlFor="location-2"
                                    className="block font-medium text-gray-700"
                                >
                                    Location
                                </label>
                            </div>
                            <input
                                type="date"
                                id="location-2"
                                name="location-2"
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Select your date"
                                size={16}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="mb-4">
                            <div className="flex items-center justify-start gap-2 h-[14px] mb-2">
                                <Image src={locationIcon} alt="loc" />
                                <label
                                    htmlFor="location-3"
                                    className="block font-medium text-gray-700"
                                >
                                    Total days
                                </label>
                            </div>
                            <input
                                type="number"
                                id="location-3"
                                name="location-3"
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Select total days"
                                size={16}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="mb-4">
                            <div className="flex items-center justify-start gap-2 h-[14px] mb-2">
                                <Image src={locationIcon} alt="loc" />
                                <label
                                    htmlFor="location-4"
                                    className="block font-medium text-gray-700"
                                >
                                    No of people
                                </label>
                            </div>
                            <input
                                type="text"
                                id="location-4"
                                name="location-4"
                                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Select no of peoples"
                                size={16}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-start lg:ml-4 mt-4 lg:mt-0">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section className='my-4'>
                <h1 className='text-center text-2xl my-10'>What udss We offer</h1>
                <div className='flex justify-center gap-10'>
                    <div className='flex flex-col items-center'>
                        <div
                            className="flex justify-center w-[152px] h-[152px] p-6 rounded-full items-center"
                            style={{
                                backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23000000' stroke-width='4' stroke-dasharray='5%25%2c 10%25' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
                                borderRadius: "100px"
                            }}
                        >
                            <Image src={publicIcon} alt="cover" className="flex justify-center w-[100px] h-[100px] object-cover rounded-none" />
                        </div>
                        <div className="flex flex-col items-center p-3 gap-y-2">
                            <h3 className="text-2xl font-semibold leading-tight text-center">
                                Personalized <br /> Itineraries
                            </h3>
                            <p className='text-sm text-center '>Crafted just for you with attention to <br /> your needs and interests.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="w-[152px] h-[152px] border-2 border-dashed border-red-500 p-6 rounded-full items-center">
                            <Image src={publicIcon} alt="cover" className="flex justify-center w-[100px] h-[100px] object-cover rounded-none" />
                        </div>
                        <div className="flex flex-col items-center p-3 gap-y-2">
                            <h3 className="text-2xl font-semibold leading-tight text-center">
                                Personalized <br /> Itineraries
                            </h3>
                            <p className='text-sm text-center '>Crafted just for you with attention to <br /> your needs and interests.</p>
                        </div>
                    </div><div className='flex flex-col items-center'>
                        <div className="w-[152px] h-[152px] border-2 border-dashed border-red-500 p-6 rounded-full items-center">
                            <Image src={publicIcon} alt="cover" className="flex justify-center w-[100px] h-[100px] object-cover rounded-none" />
                        </div>
                        <div className="flex flex-col items-center p-3 gap-y-2">
                            <h3 className="text-2xl font-semibold leading-tight text-center">
                                Personalized <br /> Itineraries
                            </h3>
                            <p className='text-sm text-center '>Crafted just for you with attention to <br /> your needs and interests.</p>
                        </div>
                    </div><div className='flex flex-col items-center'>
                        <div className="w-[152px] h-[152px] border-2 border-dashed border-red-500 p-6 rounded-full items-center">
                            <Image src={publicIcon} alt="cover" className="flex justify-center w-[100px] h-[100px] object-cover rounded-none" />
                        </div>
                        <div className="flex flex-col items-center p-3 gap-y-2">
                            <h3 className="text-2xl font-semibold leading-tight text-center">
                                Personalized <br /> Itineraries
                            </h3>
                            <p className='text-sm text-center '>Crafted just for you with attention to <br /> your needs and interests.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* line */}
            <div className="flex items-center justify-center ">
                <div className="w-10 h-10 p-2 bg-blue-500 rounded-full overflow-hidden">
                    <div className="w-20 h-10 bg-blue-500 -mt-5"></div>
                </div>
                <div className="flex-1 border-t border-dashed border-gray-500"></div>
                <div className="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                    <div className="w-20 h-10 bg-blue-500 -mt-5"></div>
                </div>
            </div>
            {/* end */}

            {/* carousel and cover image  section */}
            <section>
                <div className="w-full flex flex-col justify-center my-10">
                    <div className='flex justify-between mx-28  my-5  items-center'>
                        <div>
                            <h2 className='text-[36px]'>International</h2>
                            <h3 className='text-[32px]'>Explore the world</h3>
                        </div>
                        <div>
                            <Link href="" className="bg-slate-700 text-white py-2 px-3  border-2 border-rose-700 rounded-xl">explore</Link>
                        </div>
                    </div>
                    <div className=" flex items-center  justify-center">
                        {/* Left Icon */}
                        <div className='' onClick={handlePrev}>
                            <Image src={right} alt='left'
                                className='w-[45px] h-[45]' />
                        </div>
                        {/* Carousel Cards */}
                        <div className="relative flex justify-around items-center mx-2 gap-4">
                            {visibleCards.map((card) => (
                                <div key={card.id} className=" w-[368px] h-[372px]
                                rounded-[24px] bg-zinc-500 overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={card.image}
                                            alt="image"
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/80 to-transparent" />

                                        <h3 className='absolute bottom-8 z-20 mt-[-60px] text-white pl-8 text-[24px] font-bold'>{card.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Right Icon */}
                        < div className='' >
                            <Image src={left} alt='left' onClick={handleNext} className='w-[45px] h-[45]' />
                        </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full flex justify-center mt-5">
                        <div className="h-[3px] w-[60px] bg-gray-300 rounded-full ">
                            <div
                                className="h-full bg-blue-500 transition-all duration-200 ease-out rounded-full"
                                style={{
                                    width: `${progressPercentage}%`,
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-[323px]'>
                    <div className='absolute w-full top-0 inset-0 bg-gradient-to-b from-white via-white/50 to-transparent h-[50%]'></div>
                    <Image src={cover2} alt='cover' className='w-full h-full' />
                </div>
            </section >

            {/* carousel type-2 */}
            <section className='bg-blue-300'>
                <div className="w-full flex flex-col justify-center">
                    <div className='flex justify-between mx-28  my-5  items-center'>
                        <div>
                            <h2 className='text-[36px]'>International</h2>
                            <h3 className='text-[32px]'>Explore the world</h3>
                        </div>
                        <div>
                            <Link href="" className="bg-slate-700 text-white py-2 px-3  border-2 border-rose-700 rounded-xl">explore</Link>
                        </div>
                    </div>
                    <div className=" flex items-center  justify-center">
                        {/* Left Icon */}
                        <div className='' onClick={handlePrev}>
                            <Image src={right} alt='left'
                                className='w-[45px] h-[45]' />
                        </div>
                        {/* Carousel Cards */}
                        <div className="relative flex justify-around items-center mx-2 gap-4">
                            {visibleCards.map((card) => (
                                <div key={card.id} className=" 
                                  overflow-hidden">
                                    <div className="w-[367px] h-auto rounded-[40px] p-[20px]  bg-white mb-10">
                                        <Image
                                            src={card.image}
                                            alt="image"
                                            className=" w-[327px] h-[278px] object-cover rounded-[24px]"
                                        />
                                        <div className='flex flex-col gap-[10px] my-4 mx-4'>
                                            <h3 className=' text-[24px] font-bold'>{card.title}</h3>
                                            <div className='flex justify-center py-[5px] px-[10px] border border-black bg-slate-200 rounded-[10px]'>
                                                <Link href="">Show Packages</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        {/* Right Icon */}
                        < div className='' >
                            <Image src={left} alt='left' onClick={handleNext} className='w-[45px] h-[45]' />
                        </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full flex justify-center mt-5">
                        <div className="h-[3px] w-[60px] bg-gray-300 rounded-full ">
                            <div
                                className="h-full bg-blue-500 transition-all duration-200 ease-out rounded-full"
                                style={{
                                    width: `${progressPercentage}%`,
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default HeroSection;
