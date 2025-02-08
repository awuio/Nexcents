import React from "react";
import Image from "next/image";

function Hero() {
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
              <a
                href="#"
                className="bg-primary text-neutralwhite py-2 px-5 rounded"
              >
                Register
              </a>
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
