import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";

import "@/styles/globals.css";



export const metadata: Metadata = {
    title: {
        default: 'Practo | Listing',
        template: `%s | Listing`,
    },
    //   description: siteConfig.description,
    //   keywords: siteConfig.keywords,
    //   metadataBase: siteConfig.metadataBase,
};

export default async function ListingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="fixed w-full top-0 z-100 border-b bg-white border-[#f0f0f5]">
                <Navbar />
            </div>
            <div className="relative mt-20">

                {children}

            </div>
            {/* <div className=" lg:block">

      </div> */}
        </>

    );
}
