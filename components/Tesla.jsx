"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiSpinnerLight } from "react-icons/pi";
import Link from "next/link";
function Tesla() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 9500);
  };

  return (
    <div className="bg-neutral_Sliver w-full flex justify-center">
      <div className="max-w-6xl mx-auto">
        <div className=" xl:px-24 px-6 py-5 flex justify-center items-center space-x-7">
          <div>
            <Image
              src="/tesla.svg"
              alt="Next.js logo"
              width={307}
              height={302}
              priority
            />
          </div>
          <div className=" w-[520px]">
            <p className="text-neutral_Grey text-[12px]/[16px] font-medium mt-3">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="text-primary text-[14px]/[20px] font-medium mt-3">
              Tim Smith
            </div>
            <div className="text-neutralL_Grey text-[12px]/[16px] ">
              British Dragon Boat Racing Association
            </div>
            <br />
            <div className="flex items-center justify-between">
              <div className="flex justify-between items-center flex-wrap xl:gap-3 gap-3 gap-y-6 max-w-[802px]">
                {[
                  {
                    src: "/Logo-11.svg",
                    alt: "Icon 1",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "/Logo-1.svg",
                    alt: "Icon 2",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "/Logo-2.svg",
                    alt: "Icon 3",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "/Logo-3.svg",
                    alt: "Icon 4",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "/Logo-4.svg",
                    alt: "Icon 5",
                    width: 100,
                    height: 100,
                  },
                  {
                    src: "/Logo-5.svg",
                    alt: "Icon 6",
                    width: 100,
                    height: 100,
                  },
                ].map((image, index) => (
                  <div
                    key={index}
                    className="relative xl:w-[45px] xl:h-[45px] w-9 h-9"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      quality={100}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                ))}
              </div>
              {/* <a
                href="#"
                className="ml-5 text-primary text-nowrap text-[14px]/[20px] font-semibold flex px-3 py-2 hover:bg-neutral_Sliver rounded-[4px] focus:ring-2 focus:outline-none focus:ring-neutral_DGrey active:bg-T5 active:ring-transparent "
              >
                Meet all customers
                <div className="flex justify-center items-center px-2">
                  <FaArrowRightLong />
                </div>
              </a> */}

              <Link href="#" passHref legacyBehavior>
                <button
                  type="button"
                  onClick={handleClick}
                  aria-label="Click to perform action"
                  aria-busy={isClicked}
                  className={`ml-5 text-primary text-nowrap text-[14px]/[20px] font-semibold flex px-3 py-2 hover:bg-neutral_Sliver rounded-[4px] focus:ring-2 focus:outline-none focus:ring-neutral_DGrey active:bg-T5 active:ring-transparent ${
                    isClicked ? "bg-T5 focus:ring-0" : " bg-none"
                  }`}
                >
                  <span className="flex pl-1">
                  Meet all customers
                    <div className="flex justify-center items-center px-2">
                      {isClicked ? (
                        <PiSpinnerLight className="animate-spin duration-300 transition-all" />
                      ) : (<FaArrowRightLong />)}{" "}
                    </div>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tesla;
