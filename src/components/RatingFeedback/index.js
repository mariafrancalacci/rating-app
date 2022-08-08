import feedbackIcon from "../../icons/illustration-thank-you.svg";

function RatingFeedBack({ grade }) {
  return (
    <div className="grid grid-rows-2 max-w-sm bg-default-darkblue my-[10rem] py-[1.5rem] px-7 rounded-2xl">
      <div className="flex flex-col items-center justify-center">
        <img src={feedbackIcon} className="w-[45%] mb-5 " />
        <span className="bg-slate-700 font-light text-default-orange px-3 py-1 rounded-2xl ">
          You selected {grade} out 5
        </span>
      </div>

      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl text-default-white font-semibold">
          Thank You!
        </h1>
        <p className="text-default-mediumgrey">
          We appreciated you taking the time to give a rating.If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default RatingFeedBack;
