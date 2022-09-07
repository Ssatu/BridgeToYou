import { useEffect, useState } from "react";
import Emotions from "../Components/Emotions";
import FeedbackForm from "../Components/FeedbackForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";

function PatientFeedback() {
  const [emotions, setEmotions] = useState([]);
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div>
      {emotions.length < 4 ? (
        <Emotions setEmotions={setEmotions} />
      ) : (
        <div>
          <FeedbackForm emotions={emotions} />
        </div>
      )}
      <div class="flex justify-center pt-4">
        <div class="w-32 p-2 rounded-full border-solid border-2 border-amber-300 hover:bg-slate-200" onClick={(e) => navigate("/PatientDashboard")}>Back</div>
      </div>
    </div>
  );
}

export default PatientFeedback;
