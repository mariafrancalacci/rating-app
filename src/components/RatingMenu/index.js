import { useState } from "react";
import star from "../../icons/icon-star.svg";
import RatingGrades from "../RatingGrades";

function RatingMenu({ feedbackSubmit, setFeedbackSubmit, grade, setGrade }) {
  let num = ["1", "2", "3", "4", "5"];

  return (
    <div className="grid grid-rows-2 items-center max-w-sm bg-default-darkblue my-[10rem] mx-6 py-[1.5rem] px-7 rounded-2xl">
      <div>
        <div className=" rounded-[50%] h-10 w-10 mb-4 bg-slate-700">
          <img src={star} className="mb-4 p-3" />
        </div>
        <h1 className="text-default-white text-2xl font-semibold mb-4">
          How did we do?
        </h1>
        <p className="text-default-mediumgrey text-base font-normal">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="grid grid-rows-2 mt-2 ">
        <div className="grid grid-cols-5 items-center w-[100%] mt-3">
          {num.map((item, idx) => (
            <RatingGrades
              idx={idx}
              item={item}
              onClick={() => setGrade(idx + 1)}
              isSelected={grade === idx + 1}
            />

            //isso sao props e recebem valores. isSelected recebe como valor um booleano
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setFeedbackSubmit(!feedbackSubmit)}
            className="text-default-white text-lg font-semibold bg-default-orange hover:text-default-orange hover:bg-default-white w-[100%] rounded-[5rem] py-[0.80rem]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingMenu;

// onClick={() => setGrade(idx + 1)}
