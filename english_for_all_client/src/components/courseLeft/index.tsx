"use client";

import Image from "next/image";
import React, { useState } from "react";

import banner from "@/assets/images/course/Banner.webp";
import QuestionTab from "./QuestionTab";
import AttachmentsTab from "./AttachmentsTab";

import mute from "@/assets/icons/classes/mute.svg";
import share from "@/assets/icons/classes/share.svg";
import note from "@/assets/icons/classes/note.svg";
import like from "@/assets/icons/classes/like.svg";
import disLike from "@/assets/icons/classes/dislike.svg";
import { Typography } from "../ui/Typography";

const CourseLeft = () => {
  const [activeTab, setActiveTab] = useState<string>("Questions");

  const tabs = ["Questions", "Attachments", "Notes"];

  return (
    <div>
      <div className="border bg-white">
        <Image
          src={banner}
          alt="banner"
          height={1003}
          width={501}
          className="w-full h-full object-cover"
        />
        <div className="py-3 px-6 flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <Image src={mute} alt="icon" className='h-6 w-6 md:h-[30px] md:w-[30px]' />
              <Typography variant="Regular_H6" className="hidden md:block">Mute</Typography>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={note} alt="icon"  className='h-6 w-6 md:h-[30px] md:w-[30px]'/>
              <Typography variant="Regular_H6" className="hidden md:block">Save Nots</Typography>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={share} alt="icon"  className='h-6 w-6 md:h-[30px] md:w-[30px]'/>
              <Typography variant="Regular_H6" className="hidden md:block">Share</Typography>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <Image src={like} alt="icon" className='h-6 w-6 md:h-[30px] md:w-[30px]' />
            </div>
            <div>
              <Image src={disLike} alt="icon" className='h-6 w-6 md:h-[30px] md:w-[30px]' />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 border bg-white">
        {/* tabs */}
        <div className="pt-4 sm:px-6 flex items-center border-b">
          {tabs.map((data) => (
            <div
              key={data}
              onClick={() => setActiveTab(data)}
              className={`sm:px-5 px-3 pb-3 cursor-pointer ${
                activeTab === data && "border-b-2 border-b-primary"
              }`}
            >
              <p
                className={`${
                  activeTab === data
                    ? "text-primary font-medium"
                    : "text-light_gray"
                }  lg:text-xl hover:text-primary duration-300 text-[14px] md:text-base`}
              >
                {data}
              </p>
            </div>
          ))}
        </div>
        <div className="m-6">
          {activeTab === "Questions" ? (
            <QuestionTab />
          ) : activeTab === "Attachments" ? (
            <AttachmentsTab />
          ) : (
            <AttachmentsTab />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseLeft;
