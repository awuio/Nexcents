import React from "react";
import Image from "next/image";

function Desige() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" xl:px-24 px-6 py-8 flex justify-center items-center space-x-7">
        <div>
          <Image
            src="/pana.svg"
            alt="Next.js logo"
            width={307}
            height={302}
            priority
          />
        </div>
        <div className=" w-[418px]">
          <div className="text-neutral_DGrey text-[28px]/[36px] font-semibold text-nowrap">
            How to design your site footer like <p>we did</p>
          </div>
          <p className="text-neutral_DGrey text-[12px]/[16px] font-normal mt-3">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <br />
          <a
                href="#"
                className="bg-primary text-neutralwhite py-2 px-5 rounded"
              >
                Learn More  
              </a>
        </div>
      </div>
    </div>
  );
}

export default Desige;
