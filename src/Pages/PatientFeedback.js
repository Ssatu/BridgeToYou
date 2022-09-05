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
      <div onClick={(e) => navigate("/PatientDashboard")}>Back</div>

      {emotions.length < 4 ? (
        <Emotions setEmotions={setEmotions} />
      ) : (
        <div>
          <FeedbackForm emotions={emotions} />
        </div>
      )}
    </div>
  );
}

export default PatientFeedback;
