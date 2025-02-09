"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { PiSpinnerLight } from "react-icons/pi";
import Link from "next/link";

function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500); // จำลองการโหลด 1.5 วินาที
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1500);
  };

  return (
    <div className="bg-neutral_Sliver w-full flex justify-center">
      <div className="max-w-6xl mx-auto">
        <div className=" xl:px-24 px-6 xl:py-16 py-10 flex justify-center ">
          <div className="flex items-center">
            <div>
              <div>
                <div className="text-neutral_DGrey text-[64px]/[76px] font-semibold	">
                  Lessons and insights
                </div>
                <div className="text-primary text-[64px]/[76px] font-semibold	">
                  from 8 years
                </div>
              </div>
              <div className="text-neutralL_Grey text-base/[16px] mt-2.5">
                Where to grow your business as a photographer: site or social
                media?
              </div>
              <br />

              <Link href="#" passHref legacyBehavior>
                <button
                  type="button"
                  onClick={handleClick} 
                  aria-label="Click to perform action"
                  aria-busy={isClicked}
                  className={`text-neutralwhite py-2 px-5 rounded transition-all duration-200 focus:ring-neutral_DGrey focus:ring-2 focus:outline-none hover:bg-S2 ${
                    isClicked ? "bg-S2 focus:ring-0" : "bg-primary"
                  }`}
                >
                  <span className="flex pl-1">
                    Register
                    <div className="flex justify-center items-center pl-1">
                      {isClicked ? (
                        <PiSpinnerLight className="animate-spin duration-300 transition-all" />
                      ) : null}{" "}
                    </div>
                  </span>
                </button>
              </Link>
              
            </div>
          </div>
          <div className=" ml-[72px]">
            <Image
              src="/Illustration.svg"
              alt="Next.js logo"
              width={272.16}
              height={283.3}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
