"use client"

import React, { useState } from "react";
import { Typography } from "../ui/Typography";
import { FaCheck } from "react-icons/fa";

const QuestionTab = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const question = [
    "She reads a book.",
    "She is reading a book.",
    "She read a book.",
    "She will read a book.",
  ];

  const handleOptionChange = (idx: number) => {
    setSelectedOption(idx);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <Typography variant="SemiBold_H5" className="text-brand_black block">
          1. Which of the following sentences is in the present continuous
          tense?
        </Typography>
        <Typography variant="SemiBold_H5" className="text-orange_ block">
          01/5
        </Typography>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {question.map((data, idx) => (
          <div
            key={idx}
            className={`${selectedOption === idx && 'bg-orange_/10'} px-6 py-3 border flex gap-5 hover:bg-orange_/10 duration-300 cursor-pointer`}
            onClick={() => handleOptionChange(idx)}
          >
            <label
              className="relative flex items-center justify-center rounded-full cursor-pointer"
              htmlFor={`option-${idx}`}
            >
              <input
                type="radio"
                name="question"
                className="peer relative h-6 w-6 cursor-pointer appearance-none border checked:border-orange_ transition-all checked:bg-orange_"
                id={`option-${idx}`}
                checked={selectedOption === idx}
                onChange={() => handleOptionChange(idx)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <FaCheck />
              </span>
            </label>
            <Typography variant="Regular_H5" className="text-brand_black block">
              {data}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionTab;
