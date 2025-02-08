import React from "react";
import Image from "next/image";

function Unseen() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl mx-auto">
        <div className=" xl:px-24 pb-4 flex justify-center ">
          <div className="flex justify-center h-fit ">
            <div className="flex justify-center items-center xl:space-x-16">
              <div className="xl:h-[229px] xl:w-[307.34px] h-[209px] w-[287.34px] flex items-center">
                <div className="xl:h-[229px] xl:w-[307.34px] h-[189px] w-[267.34px] relative overflow-hidden">
                  <Image
                    src="/rafiki1.svg"
                    alt="Next.js logo"
                    quality={100}
                    priority
                    layout="fill" 
                    objectFit="cover" // หรือ "contain" ถ้าต้องการแสดงภาพทั้งหมด
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className=" w-[445px]">
                <h2 className="text-neutral_DGrey text-[36px]/[44px] font-semibold text-nowrap">
                  The unseen of spending three <p>years at Pixelgrade</p>
                </h2>
                <br />
                <p className="text-neutralL_Grey text-[12px]/[16px] text-balance">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed accumsan quam vitae est varius
                  fringilla. Pellentesque placerat vestibulum lorem sed porta.
                  Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                  risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                  vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unseen;
