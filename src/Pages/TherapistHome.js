import { useNavigate } from "react-router-dom";

function TherapistHome() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={(e) => {
          navigate("/");
        }}
      >
        Log out
      </div>
      Welcome, Dr. Anand
      <div>
        <div
          onClick={(e) => {
            navigate("/Update");
          }}
        >
          Update your patient on their therapy session!
        </div>
        <div
          onClick={(e) => {
            navigate("/ViewFeedback");
          }}
        >
          Check out feedback from your patient!
        </div>
      </div>
    </div>
  );
}

export default TherapistHome;
