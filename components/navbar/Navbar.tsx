import Image from "next/image"
import { MdKeyboardArrowDown } from "react-icons/md"


const Navbar = () => {
    return (
        <div className="w-[90%] mx-auto h-full py-3">
            <div className="flex justify-between items-center h-full">
                <div className="flex items-center gap-14">
                    <a href="/">
                        <Image src="/practo.svg" alt="logo" width={100} height={60} />
                    </a>
                    <div className="flex text-[#28328c] items-center justify-between gap-6">
                        <div className="font-semibold">
                            <a href="/find-doctor">
                                <div className="text-[16px] pb-2 pt-3">Find Doctor</div>
                                <div className="border-b-4 text-[#199FD9]"></div>
                            </a>
                        </div>
                        <div className="font-semibold">
                            <a href="/video-consult">
                                <div className="text-[16px] pb-2 pt-3">Video Consult</div>
                                <div className="hidden border-b-4 text-[#199FD9]"></div>
                            </a>
                        </div>
                        <div className="font-semibold">
                            <a href="/surgeries">
                                <div className="text-[16px] pb-2 pt-3">Surgeries</div>
                                <div className="hidden border-b-4 text-[#199FD9]"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="py-1 cursor-pointer">
                        <p className="text-[14px] flex items-center gap-1"> <span className="bg-[#28328c] text-white rounded-md px-2 pb-[1px] pt-[1.5px] text-[8px] font-light">NEW</span> For Coorporates <MdKeyboardArrowDown className="w-[20px] text-[20px] pt-1 font-normal" /></p>
                    </div>
                    <div className="py-1 cursor-pointer">
                        <p className="text-[14px] flex items-center gap-1">For Providers <MdKeyboardArrowDown className="w-[20px] text-[20px] pt-1 font-normal" /></p>
                    </div>
                    <div className="py-1 cursor-pointer">
                        <p className="text-[14px] flex items-center gap-1">Security & helps <MdKeyboardArrowDown className="w-[20px] text-[20px] pt-1 font-normal" /></p>
                    </div>
                    <div className="py-2 px-3 border flex rounded-sm border-gray-300 hover:border-[#199FD9] cursor-pointer">
                        <p className="text-[12px] text-gray-500 hover:text-[#199FD9]">Login / Signup</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
