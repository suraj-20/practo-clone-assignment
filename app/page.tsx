import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import { IoMdChatbubbles } from "react-icons/io";
import { BsChatLeftText, BsClipboardPlus } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiTransparentTubes } from "react-icons/gi";
import { SlBookOpen } from "react-icons/sl";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <div className="h-[75px] sticky top-0 z-50 border-b border-[#f0f0f5]">
        <Navbar />
      </div>
      <div className="mt-8 bg-blue-50">
        <div className="h-[65vh] flex flex-col items-center text-white p-4 bg-blue-50 bg-[url(/homepage.svg)]">
          <div className="py-4 mt-4">
            <h1 className="text-4xl font-bold">Your home for health</h1>
          </div>
          <h1 className="text-2xl font-semibold mb-2 mt-4">Find and Book</h1>
          <div className="flex flex-col gap-2 md:flex-row justify-center lg:w-[45%] md:w-[80%]">
            <input
              className="p-3 py-3 border bg-white text-gray-500 placeholder:text-gray-500 outline-none"
              placeholder="Enter Location"
            // value={location}
            // onChange={(e) => setLocation(e.target.value)}
            />
            <input
              className="p-3 py-3 border bg-white text-gray-500 placeholder:text-gray-500 outline-none w-full"
              placeholder="Search doctors, clinics, etc."
            // value={specialty}
            // onChange={(e) => setSpecialty(e.target.value)}
            />
            <button
              className="ml-4 p-2 bg-blue-600 text-white leading-none w-[25%]"
            // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="bg-[#1d2869]">
          <div className="w-[80%] mx-auto flex items-center justify-between py-4">
            <div className="flex flex-col gap-2 text-gray-200 items-center justify-center mr-6">
              <BsChatLeftText width={30} height={30} />
              <p className="text-sm">Consult with a doctor</p>
            </div>
            <div className="border-r h-[50px] text-gray-200"></div>
            <div className="flex flex-col gap-2 text-gray-200 items-center justify-center mx-6">
              <MdOutlineShoppingCart width={30} height={30} />
              <p className="text-sm">Order Medicines</p>
            </div>
            <div className="border-r h-[50px] text-gray-200"></div>
            <div className="flex flex-col gap-2 text-gray-200 items-center justify-center mx-6">
              <BsClipboardPlus width={30} height={30} />
              <p className="text-sm">View medical records</p>
            </div>
            <div className="border-r h-[50px] text-gray-200"></div>
            <div className="flex flex-col gap-2 text-gray-200 items-center justify-center mx-6">
              <GiTransparentTubes width={30} height={30} />
              <p className="text-sm">Book test</p>
            </div>
            <div className="border-r h-[50px] text-gray-200"></div>
            <div className="flex flex-col gap-2 text-gray-200 items-center justify-center mx-6">
              <SlBookOpen width={30} height={30} />
              <p className="text-sm">Read acticles</p>
            </div>
            <div className="border-r h-[50px] text-gray-200"></div>
            <div className="flex flex-col gap-2 text-gray-200 items-center justify-center mx-6">
              <PiSuitcaseSimple width={30} height={30} />
              <p className="text-sm">For healthcare providers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
