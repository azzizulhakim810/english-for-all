import React from "react";
import { Typography } from "../ui/Typography";
import Image from "next/image";

import radio from "@/assets/images/course/radio.png";

import icon1 from "@/assets/icons/classes/checkFill.png"
import icon2 from "@/assets/icons/classes/radioFill1.png"
import icon3 from "@/assets/icons/classes/radioFill2.png"
import icon4 from "@/assets/icons/classes/radioOutline.png"

const CourseRight = () => {
  const classes = [
    {
      name: "Nouns and Pronouns",
      chapter: "5/5",
      time: "3",
      icon: icon1,
    },
    {
      name: "Verbs and Tenses",
      chapter: "5/5",
      time: "3",
      icon: icon1,
    },
    {
      name: "Adjectives and Adverbs",
      chapter: "2/5",
      time: "3",
      icon: icon2,
    },
    {
      name: "Sentence Structure",
      chapter: "1/5",
      time: "3",
      icon: icon3,
    },
    {
      name: "Subject-Verb Agreement",
      chapter: "0/5",
      time: "3",
      icon: icon4,
    },
    {
      name: "Prepositions and Conjunctions",
      chapter: "0/5",
      time: "3",
      icon: icon4,
    },
    {
      name: "Articles and Determiners",
      chapter: "0/5",
      time: "3",
      icon: icon4,
    },
    {
      name: "Direct and Indirect Speech",
      chapter: "0/5",
      time: "3",
      icon: icon4,
    },
  ];

  return (
    <div className="py-6 px-9 bg-white border">
      <div className="pb-6 border-b-[2px]">
        <div className="flex gap-4 justify-between">
          <div>
            <Typography variant="Bold_H4" className="text-primary block">
              All Chapters
            </Typography>
            <Typography variant="Regular_H6" className="text-light_black block">
              English for Career
            </Typography>
          </div>
          <div>
            <Image
              src={radio}
              alt="radio"
              height={55}
              width={55}
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-slate-300 relative h-2 w-full rounded-full">
            <div className="bg-orange_ absolute top-0 left-0 h-full w-[15%] rounded"></div>
          </div>
          <div className="flex justify-between gap-4 items-center mt-1">
            <Typography
              variant="Regular_H7"
              className="text-[13px] text-light_black block"
            >
              10+ lessons · 1+ hours
            </Typography>
            <Typography
              variant="Regular_H7"
              className="text-[13px] text-light_black block"
            >
              15%
            </Typography>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {classes.map((data, idx) => (
          <div key={idx} className="bg-bg_color pt-3 pr-3 pb-4 pl-5 rounded-lg flex gap-5">
            <div>
              <Image src={data.icon} alt="icon" height={24} width={24} className="mt-1" />
            </div>
            <div className="flex-1">
              <Typography
                variant="Medium_H6"
                className="text-brand_black block"
              >
                {data.name}
              </Typography>
              <div className="mt-2 flex gap-4 justify-between items-center">
                <Typography
                  variant="Medium_H7"
                  className="text-light_black block !text-[13px]"
                >
                  Chapter: <span className="text-black">{data.chapter}</span>
                </Typography>
                <Typography
                  variant="Medium_H7"
                  className="text-light_black !text-[13px] block"
                >
                  {data.time} min
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRight;
