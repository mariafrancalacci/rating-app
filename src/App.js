import { useState } from "react";
import RatingFeedBack from "./components/RatingFeedback";
import RatingGrades from "./components/RatingGrades";
import RatingMenu from "./components/RatingMenu";

function App() {
  const [feedbackSubmit, setFeedbackSubmit] = useState(false);
  const [grade, setGrade] = useState(null);
  return (
    <div>
      {feedbackSubmit ? (
        <RatingFeedBack grade={grade} />
      ) : (
        <RatingMenu
          feedbackSubmit={feedbackSubmit}
          setFeedbackSubmit={setFeedbackSubmit}
          grade={grade}
          setGrade={setGrade}
        />
      )}
      {console.log(feedbackSubmit)}
    </div>
  );
}
export default App;
