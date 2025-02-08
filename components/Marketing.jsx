import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

function Marketing() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" xl:px-24 px-6 pt-8 items-center">
        <div className=" flex justify-center">
          <div className="text-center max-w-2xl">
            <h2 className="text-neutral_DGrey text-[28px]/[36px] font-semibold">
              Caring is the new marketing <p>in a single system</p>
            </h2>
            <p className="text-neutral_Grey text-[12px]/[16px] max-w-[400px]">
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
        </div>
        <div className=" flex justify-center xl:space-x-4 space-x-1 mt-4">
          <div className=" xl:h-[290px]  h-[270px]">
            <Image
              src="/image 18.svg"
              alt="Next.js logo"
              width={256}
              height={200}
              quality={100}
              priority
            />
            <div className=" bg-neutral_Sliver mx-5 h-[124px] rounded-lg shadow-lg flex justify-center w-56 relative -top-16 p-4 text-center text-neutral_DGrey text-[14px]/[20px] font-semibold">
              <div>
                Creating Streamlined Safeguarding Processes with OneRen
                <div className="mt-2 flex justify-center">
                  <a
                    href="#"
                    className="text-primary flex"
                  >
                    Readmore
                    <div className="flex justify-center items-center px-2">
                      <FaArrowRightLong />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" xl:h-[290px]  h-[270px]">
            <Image
              src="/image 19.svg"
              alt="Next.js logo"
              width={256}
              height={200}
              quality={100}
              priority
            />
            <div className=" bg-neutral_Sliver mx-5 h-[124px] rounded-lg shadow-lg flex justify-center w-56 relative -top-16 p-4 text-center text-neutral_DGrey text-[14px]/[20px] font-semibold">
              <div>
                What are your safeguarding responsibilities and how can you
                manage them?
                <div className="mt-2 flex justify-center">
                  <a
                    href="#"
                    className="text-primary flex"
                  >
                    Readmore
                    <div className="flex justify-center items-center px-2">
                      <FaArrowRightLong />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" xl:h-[290px]  h-[270px]">
            <Image
              src="/image 20.svg"
              alt="Next.js logo"
              width={256}
              height={200}
              quality={100}
              priority
            />
            <div className=" bg-neutral_Sliver mx-5 h-[124px] rounded-lg shadow-lg flex justify-center w-56 relative -top-16 p-4 text-center text-neutral_DGrey text-[14px]/[20px] font-semibold">
              <div>
                Revamping the Membership Model with Triathlon <p>Australia</p>
                <div className="mt-2 flex justify-center">
                  <a
                    href="#"
                    className="text-primary flex"
                  >
                    Readmore
                    <div className="flex justify-center items-center px-2">
                      <FaArrowRightLong />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
