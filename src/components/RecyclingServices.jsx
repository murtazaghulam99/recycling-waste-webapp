import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import Image from "next/image";
import { tick, wastecollectionImg } from "@/assets";

const RecyclingServices = () => {
  return (
    <>
      <div className="flex flex-wrap w-full md:space-x-12 space-x-5 space-y-6 items-center justify-center p-10 mx-auto mt-10">
        <div className="flex items-center justify-center">
          <Image
            src={wastecollectionImg}
            className="rounded-2xl w-full max-w-[420px] md:max-w-[520px] object-contain"
            alt=""
          />
        </div>
        <div className="text-left w-full max-w-[450px] space-y-5">
          <h1 className="font-bold md:text-[38px] text-[22px]">
            Recycling Services
          </h1>
          <p className="font-normal text-paragraph md:text-[20px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Scelerisque amet at sem sit
            sit sed a. Eros est massa habitasse quisque.
          </p>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex items-center space-x-2">
                <Image src={tick} alt="" />
                <p className="text-paragraph md:text-[16px] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecyclingServices;
