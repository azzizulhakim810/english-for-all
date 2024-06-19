import React from "react";
import { Typography } from "../ui/Typography";

// ** import images **
import courseImg1 from "@/assets/images/course/recentcourse1.webp";
import courseImg2 from "@/assets/images/course/recentcourse2.webp";
import Image from "next/image";

const RecentCourse = () => {
  const courseData = [
    {
      img: courseImg1,
      time: "30",
      title: "Vocabulary Vault",
      des: "Unlock a treasury of words.",
    },
    {
      img: courseImg2,
      time: "30",
      title: "Reading Realm",
      des: "Embark on literary adventures.",
    },
  ];

  return (
    <div className="mt-10">
      <Typography variant="SemiBold_H5" className="block text-brand_black">
        Recent courses
      </Typography>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {courseData.map((data, idx) => (
          <div
            key={idx}
            className="bg-light_primary  rounded-lg p-4 flex gap-5"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={data.img}
                alt="image"
                width={175}
                height={108}
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="">
              <Typography variant="Medium_H4" className="text-gray_ block">
                {data.title}
              </Typography>
              <Typography
                variant="Medium_H6"
                className="text-light_gray mt-1 block"
              >
                {data.des}
              </Typography>
              <Typography
                variant="Medium_H7"
                className="text-white bg-orange_ py-2 px-[10px] rounded-[10px] mt-6 block max-w-[70px]"
              >
                {data.time} min
              </Typography>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCourse;
