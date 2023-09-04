import React from "react";
import hogrider from "../assets/hogrider.png";
import hogrider2 from "../assets/hogrider2.png";
import Image from "next/image";

const Information = () => {
  return (
    <section className="w-full h-full bg-[#EEEEEE]">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="items-center justify-center space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8 rounded-2xl  px-5 py-[30px] custominfobg">
              <p className="text-[#333333] max-w-[781px] text-[25px] text-left leading-[35px] font-bold ">
                Legends rise and fall, but one dog with thug life glasses reigns
                supreme. Witness HOG OG - the pinnacle of achievement. He
                does not just set the bar. He is the bar. HOG OG, once a
                simple meme, donned a pair of thug life glasses and felt the
                rush of unlimited power. He did not just dream – he
                achieved. $HOG is not your everyday meme coin. It embodies
                ambition, achievement, and the audacity to dream big.
              </p>
            </div>
            <div className="md:col-span-4 items-center ">
              <div className="flex items-center justify-center">
                <Image
                  src={hogrider}
                  alt="hogrider"
                  width={350}
                  height={200}
                  className="ml-auto "
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 items-center ">
              <div className="flex items-center justify-center">
                <Image
                  src={hogrider2}
                  alt="hogrider"
                  width={350}
                  height={200}
                  className="mr-auto "
                />
              </div>
            </div>

            <div className="md:col-span-8 rounded-2xl  px-5 py-[30px] custominfobg">
              <p className="text-[#333333] max-w-[781px] text-[25px] text-left leading-[35px] font-bold ">
                Channel the spirit of HOG OG, and let is redefine what is possible
                in the meme coin galaxy. With every $DOG transaction, a piece of
                HOG is ambition, tenacity, and OG swagger is transferred.
                Friends, the financial revoution is here and this is your change
                to get to the top while supporting your favorite dog. Join us as
                we shoot for the stars, outpace galaxies, and leave legacies!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
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
        </div>
      </div>
    </section>
  );
};

export default Information;
