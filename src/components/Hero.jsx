import React from "react";
import Hog from "../assets/HeroImage.png";
import Image from "next/image";
import Hogrider from "../assets/image-2.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#EEEEEE]">
      <div className="max-w-[1340px] mx-auto ">
        <div className="py-20">
          <div className="flex items-center justify-center">
            <Image src={Hog} alt="" width={1200} height={1000} />
          </div>
          <div className="mt-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 buttontext gap-8 px-10 items-center justify-center md:px-20 ">
              <button className="border-[10px] solid bg-[#FFA518] py-3 border-[#FFFFFF] text-[#1A1B1F] buttonshadow ">
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

            <div className="my-20 px-4 my-10  md:px-20 custombg py-5 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="grid grid-rows-2 gap-4 mb-10 md:mb-[150px]">
                  <div className="mt-2">
                    <h1 className="text-[#333333] font-extrabold text-[100px] leading-[86px] tracking-normal text-left">HOG RIDER</h1>
                  </div>
                  <div className="max-w-[499px] max-h-[144px]">
                    <p className="text-[30px] leading-[36px] font-extrabold tracking-normal">
                      Celebrating the HOG Spirit: HOG RIDER ($HOG) – Where
                      Original Internet HOG Rider Unite!
                    </p>
                  </div>
                </div>
                <div className="">
                  <Image
                    src={Hogrider}
                    alt="Hogrider"
                    width={500}
                    height={200}
                    className=" md:ml-auto "
                    optimise
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
