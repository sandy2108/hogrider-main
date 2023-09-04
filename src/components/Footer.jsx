import React from "react";
import Image from "next/image";
import Hog1 from "../assets/Group-1.png";
import Hog2 from "../assets/Group-2.jpg";

import Hog3 from "../assets/Group-3.png";

import Hog4 from "../assets/Group-4.jpg";

const Footer = () => {
  return (
    <section className="w-full h-full bg-[#EEEEEE]">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="custominfobg rounded-2xl  px-5 py-[30px]">
          <div className="text-center my-5">
            <h1 className="text-[#333333] md:text-[100px] text-[50px] leading-[22px] md:leading-[44px] text-center">
              Le Memes
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <Image src={Hog3} alt="hodrider1" width={600} height={400} />
            </div>
            <div>
              <Image
                src={Hog4}
                alt="hodrider3"
                width={600}
                height={400}
                className="h-full optimise"
              />
            </div>

            <Image src={Hog1} alt="hodrider2" width={600} height={100} />
            <Image src={Hog2} alt="hodrider4" width={600} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
