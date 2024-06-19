import React from "react";
import { Typography } from "../ui/Typography";
import Image from "next/image";

// ** import images **
import courseImg1 from "@/assets/images/course/courseImg1.webp";
import courseImg2 from "@/assets/images/course/courseImg2.webp";
import courseImg3 from "@/assets/images/course/courseImg3.webp";
import { IoSearch } from "react-icons/io5";

const MyClass = () => {
  const classData = [
    {
      img: courseImg1,
      time: "30",
      title: "Grammar Hub",
      des: "Master English grammar rules with interactive lessons and exercises.",
    },
    {
      img: courseImg2,
      time: "30",
      title: "Vocabulary Vault",
      des: "Expand vocabulary with flashcards, word lists, and daily challenges.",
    },
    {
      img: courseImg3,
      time: "30",
      title: "Speaking Studio",
      des: "Grow vocabulary through flashcards, lists, and daily challenges.",
    },
  ];
  return (
    <div className="mt-8">
      <div className="flex justify-between gap-4 items-center">
        <div>
          <Typography variant="Medium_H5" className="block ">
            My Classes
          </Typography>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border outline-none py-[14.5px] pr-6 pl-14 text-base md:text-lg"
            />
            <IoSearch className="absolute top-4 left-6 text-2xl text-orange_" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {classData.map((data, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden relative">
            <div>
              <Image
                src={data.img}
                alt="course Image"
                height={445}
                width={350}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t  from-black from-10% via-transparent vai-40%  to-transparent  "></div>
            <div className="absolute bottom-0 pb-7 pl-8 pr-4">
              <Typography
                variant="SemiBold_H5"
                className="text-white block mb-2"
              >
                {data.title}
              </Typography>
              <Typography
                variant="Regular_H6"
                className="text-white block mb-2"
              >
                {data.des}
              </Typography>
            </div>
            <div className="absolute top-8 right-4 bg-orange_ rounded-lg p-2">
              <Typography variant="Regular_H7" className="text-white ">
                {data.time} min
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
