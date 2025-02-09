"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiSpinnerLight } from "react-icons/pi";
import Link from "next/link";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1500);
  };
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="lg:px-8 px-4 py-2.5 flex justify-between items-center">
          <div>
            <Image
              src="/Logo.svg"
              alt="Next.js logo"
              width={108}
              height={17}
              priority
            />
          </div>
          <div className="flex space-x-8 items-center">
            <div>
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className="link-con">Home</a>
                </li>
                <li>
                  <a href="#" className="link-con">Feature</a>
                </li>
                <li>
                  <a href="#" className="link-con">Community</a>
                </li>
                <li>
                  <a href="#" className="link-con">Blog</a>
                </li>
                <li>
                  <a href="#" className="link-con">Pricing</a>
                </li>
              </ul>
            </div>
            
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
                  Register Now
                  <div className="flex justify-center items-center px-2">
                    {isClicked ? (
                      <PiSpinnerLight className="animate-spin duration-300 transition-all" />
                    ) : (
                      <FaArrowRightLong />
                    )}
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
