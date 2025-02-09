"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [isVisible, target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function Helping() {
  return (
    <div className="bg-neutral_Sliver w-full flex justify-center">
      <div className="max-w-6xl mx-auto">
        <div className=" xl:px-24 px-6 py-11 flex justify-center ">
          <div className=" flex items-center justify-between space-x-10">
            <div className=" w-[335px] ">
              <div className="text-neutral_DGrey text-[28px]/[36px] font-semibold text-nowrap">
                Helping a local
                <p className=" text-primary">business reinvent itself</p>
              </div>
              <p className="text-neutral_DGrey text-[12px]/[16px] font-normal text-nowrap">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div>
              <div className=" flex mb-7">
                <div className=" flex mr-3 w-36">
                  <Image
                    src="/Members.svg"
                    alt="Next.js logo"
                    width={33.41}
                    height={33.41}
                    priority
                  />
                  <div className=" ml-4 text-neutral_DGrey text-[20px]/[20px] font-semibold text-nowrap">
                    <span>
                      <Counter target={2245341} />
                      <p className=" text-neutralL_Grey text-[12px]/[16px]">
                        Members
                      </p>
                    </span>
                  </div>
                </div>
                <div className=" flex w-36">
                  <Image
                    src="/Clubs.svg"
                    alt="Next.js logo"
                    width={33.41}
                    height={33.41}
                    priority
                  />
                  <div className=" ml-4 text-neutral_DGrey text-[20px]/[20px] font-semibold text-nowrap">
                    <span>
                      <Counter target={46238} />
                      <p className=" text-neutralL_Grey text-[12px]/[16px]">
                        Clubs
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex">
                <div className=" flex mr-3 w-36">
                  <Image
                    src="/Event.svg"
                    alt="Next.js logo"
                    width={33.41}
                    height={33.41}
                    priority
                  />
                  <div className=" ml-4 text-neutral_DGrey text-[20px]/[20px] font-semibold text-nowrap">
                    <span>
                      <Counter target={828867} />
                      <p className=" text-neutralL_Grey text-[12px]/[16px]">
                        Event Bookings
                      </p>
                    </span>
                  </div>
                </div>
                <div className=" flex w-36">
                  <Image
                    src="/Payments.svg"
                    alt="Next.js logo"
                    width={33.41}
                    height={33.41}
                    priority
                  />
                  <div className=" ml-4 text-neutral_DGrey text-[20px]/[20px] font-semibold text-nowrap">
                    <span>
                      <Counter target={1926436} />
                      <p className=" text-neutralL_Grey text-[12px]/[16px]">
                        Payments
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helping;
