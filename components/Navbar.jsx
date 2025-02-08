import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <a className="bg-primary text-neutralwhite py-2 px-5 rounded">
              <div className="flex ">
                Register Now
                <div className="flex justify-center items-center px-2">
                  <FaArrowRightLong />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
