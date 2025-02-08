import React from "react";
import Image from "next/image";
function Singlesystem() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl mx-auto">
        <div className=" xl:px-24 px-6 flex justify-center ">
          <div className="xl:mb-14 mb-4">
            <div className="text-center">
              <h2 className="text-neutral_DGrey text-[28px]/[36px] font-semibold">
                Manage your entire community <p>in a single system</p>
              </h2>
              <p className="text-neutralL_Grey text-[12px]/[16px]">
                Who is Nextcent suitable for?
              </p>
            </div>
            <br />

            <div className="flex justify-center">
              <div className="flex xl:space-x-28 space-x-16 ">
                <div>
                  <div className="text-center px-3 py-4 w-52 shadow">
                    <div className="flex justify-center mb-4 ">
                      <Image
                        src="/Member.svg"
                        alt="Next.js logo"
                        width={46}
                        height={40}
                        priority
                      />
                    </div>

                    <h2 className="text-neutral_DGrey text-[20px]/[28px] font-semibold">
                      Membership <p>Organisations</p>
                    </h2>
                    <p className="text-neutralL_Grey text-[12px]/[16px] text-balance">
                      Our membership management software provides full
                      automation of membership renewals and payments
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-center px-3 py-4 w-52 shadow">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/Nationnal.svg"
                        alt="Next.js logo"
                        width={46}
                        height={40}
                        priority
                      />
                    </div>

                    <h2 className="text-neutral_DGrey text-[20px]/[28px] font-semibold">
                      National <p>Associations</p>
                    </h2>
                    <p className="text-neutralL_Grey text-[12px]/[16px]">
                      Our membership management software provides full
                      automation of membership renewals and payments{" "}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-center px-3 py-4 w-52 shadow">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/hand.svg"
                        alt="Next.js logo"
                        width={46}
                        height={40}
                        priority
                      />
                    </div>
                    <h2 className="text-neutral_DGrey text-[20px]/[28px] font-semibold">
                      Clubs And <p>Groups</p>
                    </h2>
                    <p className="text-neutralL_Grey text-[12px]/[16px]">
                      Our membership management software provides full
                      automation of membership renewals and payments{" "}
                    </p>
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

export default Singlesystem;
