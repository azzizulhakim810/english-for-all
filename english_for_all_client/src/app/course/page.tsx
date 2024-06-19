import Navbar from "@/components/Navbar";
import CourseLeft from "@/components/courseLeft";
import CourseRight from "@/components/courseRight";
import React from "react";

const Course = () => {
  return (
    <div className="">
      <div className="mt-5 flex flex-col lg:flex-row  gap-4">
        <div className="flex-1 ">
          <CourseLeft />
        </div>
        <div className="w-full lg:w-[336px]  ">
          <CourseRight />
        </div>
      </div>
    </div>
  );
};

export default Course;
