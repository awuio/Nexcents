"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiSpinnerLight } from "react-icons/pi";
import Link from "next/link";
function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 9500);
  };
  return (
    <div>
      <div className="bg-neutral_Sliver w-full flex justify-center py-5 xl:px-24 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-center max-w-2xl mx-auto flex justify-center">
                <h2 className="text-neutral_Black text-[36px]/[44px] font-semibold">
                  Pellentesque suscipit <p>fringilla libero eu.</p>
                </h2>
              </div>
              <Link href="#" passHref legacyBehavior>
                <button
                  type="button"
                  onClick={handleClick}
                  aria-label="Click to perform action"
                  aria-busy={isClicked}
                  className={`text-neutralwhite py-2 px-5 mt-5 rounded transition-all duration-200 focus:ring-neutral_DGrey focus:ring-2 focus:outline-none active:focus:ring-transparent hover:bg-S2 ${
                    isClicked ? "bg-S2 focus:ring-transparent" : "bg-primary"
                  }`}
                >
                  <span className="flex pl-1">
                    Get demo
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
      <div className="bg-neutral_Black w-full flex justify-center xl:px-24 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between space-x-28">
            <div className="my-auto">
              <Image
                src="/logow.svg"
                alt="Next.js logo"
                width={133}
                height={21}
                priority
              />
              <h4 className="text-neutral_Sliver text-[12px]/[16px] my-3">
                Copyright © 2020 Landify UI Kit.
                <p>All rights reserved</p>
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Icon link"
                  className="flex justify-center items-center rounded-icon"
                >
                  <div className="w-9 h-9 bg-neutral_DGrey rounded-full flex justify-center items-center">
                    <Image
                      src="/Path.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </a>
                <a
                  href="#"
                  aria-label="Icon link"
                  className="flex justify-center items-center rounded-icon"
                >
                  <div className="w-9 h-9 bg-neutral_DGrey rounded-full flex justify-center items-center">
                    <Image
                      src="/Path2.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </a>
                <a
                  href="#"
                  aria-label="Icon link"
                  className="flex justify-center items-center rounded-icon"
                >
                  <div className="w-9 h-9 bg-neutral_DGrey rounded-full flex justify-center items-center">
                    <Image
                      src="/Path3.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </a>
                <a
                  href="#"
                  aria-label="Icon link"
                  className="flex justify-center items-center rounded-icon"
                >
                  <div className="w-9 h-9 bg-neutral_DGrey rounded-full flex justify-center items-center">
                    <Image
                      src="/Path4.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                      priority
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className=" flex space-x-10 justify-center">
              <div>
                <ul>
                  <li>
                    <span className="text-neutralwhite text-[18px]/[28px] font-semibold">
                      Company
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <span className="text-neutralwhite text-[18px]/[28px] font-semibold">
                      Support
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Help center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Legal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral_Sliver text-[12px]/[16px] link-con"
                    >
                      Status
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-neutralwhite text-[18px]/[28px] font-semibold">
                  Stay up to date
                </span>
                <br />
                <div className="flex items-center bg-neutral_Grey rounded-md px-2 h-8 w-52">
                  <input
                    placeholder="Your email address"
                    className=" bg-neutral_Grey h-7 w-44 rounded-md text-neutral_Sliver focus:outline-none placeholder:text-neutral_Sliver px-2 text-[12px]/[16px]"
                  />
                  <Image
                    src="/send.svg"
                    alt="Next.js logo"
                    width={17}
                    height={17}
                    priority
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
