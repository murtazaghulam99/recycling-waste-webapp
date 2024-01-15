import React from "react";
import Image from "next/image";
import { teamMembers } from "@/constants";

const MeetTeam = () => {
  return (
    <>
      <div className="space-y-5 flex flex-col items-center py-6 px-3 mt-5">
        <h1 className="md:text-[36px] text-[28px] font-bold text-424242">
          Meet Our Team
        </h1>
        <p className="text-paragraph text-center w-full max-w-[640px] md:text-18 text-14 pb-8">
          Lorem ipsum dolor sit amet consectetur. Posuere tortor id et
          adipiscing phasellus orci at. Tellus tempus morbi in pharetra nibh.
          Facilisis malesuada quis nam adipiscing. Sed tincidunt lacus ipsum
          lectus molestie dolor. Massa sit.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-20 gap-10 items-center py-5 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center relative">
            <div className="w-full md:max-w-[300px] relative max-w-[220px]">
              <Image
                src={member.background}
                className="w-full max-w-[288px] max-h-[450px] border-[0px] rounded-[20px]"
                alt=""
              />
              <div className="rounded-3xl w-full h-full flex items-start justify-center absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-full md:max-w-[250px] bottom-0 absolute max-w-[162px]">
                  <Image
                    src={member.img}
                    className="w-full absolute bottom-0"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-[#424242] sm:text-[24px] text-[18px] md:text-[28px] pt-3">
              {member.name}
            </h1>
            <p className="font-light text-[#424242] text-14 md:text-18 mb-10">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MeetTeam;
