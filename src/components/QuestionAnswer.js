"use client";

import React, { useState } from "react";

const QuestionAnswer = ({ questionNumber = 1, questionObj = {} }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const {
    question = "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    answer = [
      { option: "120 metres", isCorrect: false },
      { option: "180 metres", isCorrect: false },
      { option: "324 metres", isCorrect: false },
      { option: "150 metres", isCorrect: true },
    ],
    explanation = "Speed =60 x5m/sec=50m/sec.183 \n Length of the train = (Speed x Time). \n Length of the train =50x 9m = 150 m.3",
  } = questionObj;

  const handleOptionClick = (option, index) => {
    // setSelectedOption(option);
    setIsSelected(index);
    setIsAnswered(true);
    if (option.isCorrect) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    console.log("option", option, index);
  };

  console.log("selectedOption", isSelected);

  return (
    <div className="bg-white p-6 rounded-xl mb-5">
      <div>
        {isCorrect ? (
          <p className="text-main_purple_color animate-pulse text-xl">
            You selected correct answer
          </p>
        ) : null}
        <div className="flex flex-row items-center">
          <div className="w-8 h-8 flex justify-center items-center">
            <p className="text-[#1F1F1F] font-bold">{questionNumber}. </p>
          </div>
          <p className="text-[#1F1F1F] font-bold ml-3 text-xs sm:text-sm">
            {question}
          </p>
        </div>
        <div className="mt-4 ml-1">
          <div
            className="flex flex-row cursor-pointer"
            onClick={() => {
              handleOptionClick(answer[0], 0);
            }}
          >
            <div
              className={`${
                isSelected == 0 ? "border-main_purple_color" : "border-gray-300"
              } border-2 rounded-full w-5 sm:w-6 h-5 sm:h-6 flex justify-center items-center`}
            >
              <p
                className={`${
                  isSelected == 0 ? "text-main_purple_color" : "text-[#1F1F1F]"
                } text-xs sm:text-sm`}
              >
                A
              </p>
            </div>
            <p className="text-[#1F1F1F] ml-2 sm:ml-4 text-xs sm:text-sm">
              {answer[0].option}
            </p>
          </div>

          <div
            className="flex flex-row mt-2 cursor-pointer"
            onClick={() => {
              handleOptionClick(answer[1], 1);
            }}
          >
            <div
              className={`${
                isSelected == 1 ? "border-main_purple_color" : "border-gray-300"
              } border-2 rounded-full w-5 sm:w-6 h-5 sm:h-6 flex justify-center items-center`}
            >
              <p
                className={`${
                  isSelected == 1 ? "text-main_purple_color" : "text-[#1F1F1F]"
                } text-xs sm:text-sm`}
              >
                B
              </p>
            </div>
            <p className="text-[#1F1F1F] ml-2 sm:ml-4 text-xs sm:text-sm">
              {answer[1].option}
            </p>
          </div>

          <div
            className="flex flex-row mt-2 cursor-pointer"
            onClick={() => {
              handleOptionClick(answer[2], 2);
            }}
          >
            <div
              className={`${
                isSelected == 2 ? "border-main_purple_color" : "border-gray-300"
              } border-2 rounded-full w-5 sm:w-6 h-5 sm:h-6 flex justify-center items-center`}
            >
              <p
                className={`${
                  isSelected == 2 ? "text-main_purple_color" : "text-[#1F1F1F]"
                } text-xs sm:text-sm`}
              >
                C
              </p>
            </div>
            <p className="text-[#1F1F1F] ml-2 sm:ml-4 text-xs sm:text-sm">
              {answer[2].option}
            </p>
          </div>

          <div
            className="flex flex-row mt-2 cursor-pointer"
            onClick={() => {
              handleOptionClick(answer[3], 3);
            }}
          >
            <div
              className={`${
                isSelected == 3 ? "border-main_purple_color" : "border-gray-300"
              } border-2 rounded-full w-5 sm:w-6 h-5 sm:h-6 flex justify-center items-center`}
            >
              <p
                className={`${
                  isSelected == 3 ? "text-main_purple_color" : "text-[#1F1F1F]"
                } text-xs sm:text-sm`}
              >
                D
              </p>
            </div>
            <p className="text-[#1F1F1F] ml-2 sm:ml-4 text-xs sm:text-sm">
              {answer[3].option}
            </p>
          </div>
        </div>
      </div>

      {
        <button
          disabled={!isAnswered}
          className={`${
            isAnswered ? "cursor-pointer" : "cursor-not-allowed"
          } text-[#1F1F1F] text-xs sm:text-sm font-semibold bg-gray-200 w-full max-w-[180px] py-1 mt-6 rounded-md`}
          onClick={() => {
            setShowExplanation(!showExplanation);
          }}
        >
          {showExplanation ? "Hide Explanation" : "Show Explanation"}
        </button>
      }
    </div>
  );
};

export default QuestionAnswer;
