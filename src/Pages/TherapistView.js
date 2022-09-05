import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TherapistView() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={(e) => {
          navigate("/TherapistDashboard");
        }}
      >
        Back
      </div>
      Here's how George felt about the previous session:
      <div>Your patient felt these emotions: {user.emotions}</div>
      <div>Here's what they had to say: {user.feedback}</div>
    </div>
  );
}

export default TherapistView;
