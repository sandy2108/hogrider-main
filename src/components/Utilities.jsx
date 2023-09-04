import React from "react";

const Utilities = () => {
  return (
    <section className="w-full bg-[#EEEEEE] text-[#333333]">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="items-center justify-center space-y-10 my-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 custominfobg rounded-2xl  px-5 py-[30px] ">
              <h1 className="text-center utilitiestext">$HOG</h1>
              <p className="text-center utilitiespara my-3">
                $HOG is a project driven by the OG community, giving them the
                platform they deserve to shine.
              </p>
            </div>
            <div className="md:col-span-4 custominfobg rounded-2xl  px-5 py-[30px] ">
              <h1 className="text-center utilitiestext">Dedicated Community</h1>
              <p className="text-center utilitiespara my-3">
                Join a vibrant and dedicated community of Gangster HOGs who are
                devoted to skyrocketing this project to new heights.
              </p>
            </div>
            <div className="md:col-span-4 custominfobg rounded-2xl  px-5 py-[30px] ">
              <h1 className="text-center utilitiestext">Vision for growth</h1>
              <p className="text-center utilitiespara my-3">
                Our plans are loaded with exciting calls, including
                partnerships, games, and more, designed to keep our community
                engaged and exhilarated.
              </p>
            </div>
          </div>
        </div>

        <div className="my-20 px-4 my-10 custominfobg md:px-20 custombg py-5 rounded-2xl">
          <div className="items-center justify-center">
            <h1 className="md:text-[100px] font-bold md:leading-[100px] text-center text-5xl leading:[30px]">
              WHATS SETS US APART?
            </h1>
            <div className="grid grid-cols-1 items-center justify-center gap-3 my-5">
              <div className="flex items-center  justify-center ">
                <p className=" flex items-center justify-center text-[18px] md:text-[24px] leading-[30px] font-normal text-center max-w-[600px] ">
                  HOGs RIDER: HOG OG pays homage to the iconic Gangster HOGs, a
                  cherished subculture within the HOG universe.
                </p>
              </div>

              <div className="flex items-center justify-center ">
                <p className="flex items-center md:text-[24px] text-center text-[18px] leading-[30px] font-normal max-w-[850px]">
                  Authenticity: Our community is comprised of genuine OG
                  enthusiasts who appreciate the classics.
                </p>
              </div>

              <p className="text-center justify-center text-[20px] my-5 md:text-[30px] leading-[30px] ">
                {" "}
                Join a dedicated community of OG HOG
              </p>
              <p className="text-center justify-center text-[18px]  md:text-[24px] leading-[30px] ">
                {" "}
                supporters who share your love for the originals.
              </p>
              <div className="flex items-center justify-center my-5">
                <p className="flex items-center md:text-[24px] text-center text-[18px] leading-[30px] font-normal max-w-[850px]">
                  Active Participation: HOG OG holders have a voice in project
                  decisions and proposals.
                </p>
              </div>
              <div className="flex items-center justify-center ">
                <p className="flex items-center md:text-[24px] text-center text-[18px] leading-[30px] font-normal max-w-[950px]">
                  No Affiliations: HOG OG ($HOG) is a standalone project with no
                  affiliations to any other HOG-related tokens or projects.
                </p>
              </div>
              <div className="flex items-center justify-center my-5">
                <p className="flex items-center md:text-[24px] text-center text-[18px] leading-[30px] font-normal max-w-[1000px]">
                  Open Communication: We value transparency and are dedicated to
                  keeping our community informed and involved.
                </p>
              </div>
              <div className="flex items-center justify-center my-5">
                <p className="flex items-center md:text-[24px] text-center text-[18px] leading-[30px] font-normal max-w-[1050px]">
                  Unity: Join us in the journey to elevate the OG HOGs to new
                  heights, as we make history together in the crypto world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 buttontext gap-8 px-10 items-center justify-center md:px-20 ">
              <button className="border-[10px] solid bg-[#FFA518] py-3 border-[#FFFFFF] text-[#1A1B1F]  buttonshadow buttonbox">
                Twitter
              </button>
              <button className="border-[10px] solid bg-[#FFA518]  py-3 border-[#FFFFFF] text-[#1A1B1F] buttonshadow  ">
                Telegram
              </button>
              <button className="border-[10px] solid bg-[#FFA518] py-3 border-[#FFFFFF] text-[#1A1B1F] buttonshadow  ">
                Dextools
              </button>
              <button className="border-[10px] solid bg-[#FFA518] py-3 border-[#FFFFFF] text-[#1A1B1F] buttonshadow  ">
                Uniswap
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Utilities;
