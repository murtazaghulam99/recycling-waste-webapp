import { trashResponsibilityImg } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-10 md:mt-14 mt-0 gap-5">
      <div className="mb-6 md:mr-12 space-y-5">
        <div className="text-left w-full max-w-[450px] space-y-5">
          <h1 className="font-bold md:text-[38px] text-[22px]">
            We Treat Your Trash Responsibly For A Greener Planet!
          </h1>
          <p className="font-normal text-paragraph md:text-[20px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Posuere tortor id et
            adipiscing phasellus orci at.
          </p>
        </div>
        <Image
          src={trashResponsibilityImg}
          className="rounded-3xl w-full max-w-[400px] md:max-w-[520px] object-contain"
          alt=""
        />
      </div>
      <div className="text-left w-full max-w-[450px] space-y-5">
        <div className="border-b-2 py-3">
          <h1 className="font-bold md:text-[26px] text-[22px]">
            Provide Us With The Details
          </h1>
          <p className="font-normal text-paragraph md:text-[16px] text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Posuere tortor id et
            adipiscing phasellus orci at. Tellus tempus morbi in pharetra nibh.
            Facilisis malesuada quis nam adipiscing.
          </p>
        </div>

        <div className="border-b-2 py-3">
          <h1 className="font-bold md:text-[26px] text-[22px] space-y-5">
            Pick The Suitable Plan For You
          </h1>
          <p className="font-normal text-paragraph md:text-[16px] text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Posuere tortor id et
            adipiscing phasellus orci at. Tellus tempus morbi in pharetra nibh.
            Facilisis malesuada quis nam adipiscing.
          </p>
        </div>
        <div className="border-b-2 py-3">
          <h1 className="font-bold md:text-[26px] text-[22px]">
            Online Scheduling In Few Clicks
          </h1>
          <p className="font-normal text-paragraph md:text-[16px] text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Posuere tortor id et
            adipiscing phasellus orci at. Tellus tempus morbi in pharetra nibh.
            Facilisis malesuada quis nam adipiscing.
          </p>
        </div>
        <div className="border-b-2 py-3">
          <h1 className="font-bold md:text-[26px] text-[22px]">
            We Collect Waste Immediately
          </h1>
          <p className="font-normal text-paragraph md:text-[16px] text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Posuere tortor id et
            adipiscing phasellus orci at. Tellus tempus morbi in pharetra nibh.
            Facilisis malesuada quis nam adipiscing.
          </p>
        </div>
        <Link href="contactus">
          <button className="button text-white text-sm py-3 px-6 mt-8">
            Contact Us For Your Trash
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
