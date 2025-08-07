"use client"

import Image from 'next/image';
// import DoctorCard from '@/components/cards/DoctorCard';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

export default function Listing() {
    const params = useParams();
    const location = params.location;
    const specialty = params.specialty;
    const [, setDoctors] = useState([]);

    useEffect(() => {
        if (location && specialty) {
            fetch(`/api/doctors?location=${location}&specialty=${specialty}`)
                .then(res => res.json())
                .then(data => setDoctors(data));
        }
    }, [location, specialty]);

    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => setIsOpen(prev => !prev);

    return (
        <div className="py-4">
            <div className='md:w-[90%] lg:w-[80%] mx-auto'>
                <div className="flex flex-col gap-6 md:flex-row justify-center">
                    <div className='flex flex-col md:flex-row justify-center w-[80%]'>
                        <input
                            className="p-2 border border-gray-300 bg-white text-gray-500 placeholder:text-gray-500 outline-none"
                            placeholder="Enter Location"
                        // value={location}
                        // onChange={(e) => setLocation(e.target.value)}
                        />
                        <input
                            className="p-2 border border-gray-300 bg-white text-gray-500 placeholder:text-gray-500 outline-none w-full"
                            placeholder="Search doctors, clinics, etc."
                        // value={specialty}
                        // onChange={(e) => setSpecialty(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col justify-between'>
                        <span className='text-[12px] text-gray-500'>Feed up of endless wait?</span>
                        <p className='text-[14px] '>Look for clinic with <span className='text-[#8a45e6] font-bold'>Prime</span></p>
                    </div>
                </div>
            </div>

            <div className='bg-[#28328c] mt-12'>
                <div className="md:w-[90%] lg:w-[80%] mx-auto p-2 flex gap-3">
                    <div className="relative inline-block w-[14%]">
                        <button
                            // onClick={toggleDropdown}
                            className="inline-flex w-full justify-between bg-[#434ea2] px-3 py-1 text-sm font-semibold text-gray-200"
                        >
                            Gender
                            <IoIosArrowDown
                                aria-hidden="true"
                                className="-mr-1 size-5 text-gray-400"
                            />
                        </button>
                    </div>

                    <div className="relative inline-block w-[14%]">
                        <button
                            // onClick={toggleDropdown}
                            className="inline-flex w-full justify-between bg-[#434ea2] px-3 py-1 text-sm font-semibold text-gray-200"
                        >
                            Patient Stories
                            <IoIosArrowDown
                                aria-hidden="true"
                                className="-mr-1 size-5 text-gray-400"
                            />
                        </button>
                    </div>

                    <div className="relative inline-block w-[14%]">
                        <button
                            // onClick={toggleDropdown}
                            className="inline-flex w-full justify-between bg-[#434ea2] px-3 py-1 text-sm font-semibold text-gray-200"
                        >
                            Expirence
                            <IoIosArrowDown
                                aria-hidden="true"
                                className="-mr-1 size-5 text-gray-400"
                            />
                        </button>
                    </div>

                    <div className="relative inline-block w-[14%]">
                        <button
                            // onClick={toggleDropdown}
                            className="inline-flex w-full justify-start gap-x-3 px-3 py-1 text-sm font-semibold text-gray-200 shadow-xs"
                        >
                            All Filters
                            <IoIosArrowDown
                                aria-hidden="true"
                                className="-mr-1 size-5 text-gray-400"
                            />
                        </button>
                    </div>

                    <div className="relative flex items-center w-[20%]">
                        <p className='text-white text-md w-2/4'>Sort By</p>
                        <button
                            // onClick={toggleDropdown}
                            className="inline-flex w-full justify-between bg-[#434ea2] px-3 py-1 text-sm font-semibold text-gray-200"
                        >
                            Relevence
                            <IoIosArrowDown
                                aria-hidden="true"
                                className="-mr-1 size-5 text-gray-400"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className='py-8 px-12 flex gap-4'>
                <div className='w-[70%]'>
                    <div className='border-b border-gray-300'>
                        <h2 className="text-3xl font-semibold mb-2">{specialty} Darmitiologist availavle in Gurgaon{location}</h2>
                        <p className='font-noraml mb-8 flex gap-2 items-center'><Image src="/verified.svg" alt="verified doctor details" /> Book appointments with minimum wait-time & verified doctor details</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-6 p-4 mt-6 border-b border-gray-300 pb-10">
                            <div className='bg-[#d64544ad] rounded-[50%] w-35 h-35'><span className='relative -bottom-35 left-15 text-xs'>AD</span></div>
                            <div className='flex flex-col w-90'>
                                <h3 className="text-xl font-normal text-blue-400">Satya Skin & Hair Care</h3>
                                <p className="text-sm underline text-gray-600">Dermatologists</p>
                                <p className='text-gray-600'>25-26 years experience</p>
                                <p className='text-md'>Gurgaon</p>
                                <p className='text-md'>₹5000 <span className='text-sm text-gray-600'>Consultaion Fees</span></p>
                                <p><span className='px-3 pb-[2px] text-white text-sm bg-green-600 rounded'>92%</span> <span className='underline text-gray-600'>242 Patient Stories</span></p>
                            </div>
                            <div className='flex flex-col justify-end items-center w-50'>
                                {/* {doctor.availableToday && <p className="text-green-600">Available Today</p>} */}
                                <p className='text-green-600'>Available Today</p>
                                <div className="mt-2 flex flex-col gap-2 w-full">
                                    <button className="bg-[#199fd9] text-[14px] text-white px-3 py-2 border-none rounded">Book Clinic Visit</button>
                                    <button className="border border-gray-300 text-[14px] px-3 py-2 rounded">Contact Clinic</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 p-4 mt-6 border-b border-gray-300 pb-10">
                            <div className='bg-[#d64544ad] rounded-[50%] w-35 h-35'><span className='relative -bottom-35 left-15 text-xs'>AD</span></div>
                            <div className='flex flex-col w-90'>
                                <h3 className="text-xl font-normal text-blue-400">Satya Skin & Hair Care</h3>
                                <p className="text-sm underline text-gray-600">Dermatologists</p>
                                <p className='text-gray-600'>25-26 years experience</p>
                                <p className='text-md'>Gurgaon</p>
                                <p className='text-md'>₹5000 <span className='text-sm text-gray-600'>Consultaion Fees</span></p>
                                <p><span className='px-3 pb-[2px] text-white text-sm bg-green-600 rounded'>92%</span> <span className='underline text-gray-600'>242 Patient Stories</span></p>
                            </div>
                            <div className='flex flex-col justify-end items-center w-50'>
                                {/* {doctor.availableToday && <p className="text-green-600">Available Today</p>} */}
                                <p className='text-green-600'>Available Today</p>
                                <div className="mt-2 flex flex-col gap-2 w-full">
                                    <button className="bg-[#199fd9] text-[14px] text-white px-3 py-2 border-none rounded">Book Clinic Visit</button>
                                    <button className="border border-gray-300 text-[14px] px-3 py-2 rounded">Contact Clinic</button>
                                </div>
                            </div>
                        </div>
                        {/* {doctors.map((doc) => (
                        <DoctorCard key={doc} doctor={doc} />
                    ))} */}
                    </div>
                </div>
                <div className='w-[30%] bg-gray-300 sticky'></div>
            </div>

        </div>
    )
}
