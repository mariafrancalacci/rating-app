function RatingGrades({ item, idx, onClick, isSelected }) {
  console.log(item);
  return (
    <button
      onClick={onClick}
      className={`text-default-mediumgrey ${
        isSelected ? "bg-default-orange" : "bg-slate-700"
      }  font-semibold hover:text-default-white hover:bg-default-lightgrey active:bg-default-orange cursor-pointer rounded-[50%] h-12 w-12  mt-4  text-center`}
    >
      {item}
    </button>
  );
}

export default RatingGrades;
