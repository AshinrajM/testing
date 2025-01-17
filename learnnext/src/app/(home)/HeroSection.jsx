import React from 'react';
import Navbar from '../components/Navbar';
import cover from '../../../public/cover.webp'; // Ensure the path to the image is correct
import locationIcon from "../../../public/location.svg";
import usersIcon from "../../../public/users.svg";
import calendarIcon from "../../../public/calendar.svg";
import daynightIcon from "../../../public/daynight.svg";
import Image from 'next/image';


const HeroSection = () => {
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



        </>
    );
};

export default HeroSection;
