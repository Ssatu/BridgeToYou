import { useState } from "react";
import { Link, useInRouterContext, useNavigate } from "react-router-dom";
import Aesopp from "../Components/Aesopp";
import Tracker from "../Components/Tracker";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";

function Dashboard() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [therapyObjective, setTherapyObjective] = useState(user.therapyObj);
  const [totalSessions, setTotalSessions] = useState(user.totalSessions);
  const [completedSessions, setCompletedSessions] = useState(
    user.completedSessions
  );
  const [lastWeek, setLastWeek] = useState(user.lastWeek);
  const [fable, setFable] = useState(user.fable);

  return (
    <div>
      <div
        onClick={(e) => {
          navigate("/");
        }}
      >
        Log out
      </div>
      <div>Welcome back, {user.name}</div>
      <Tracker
        lastWeek={lastWeek}
        therapyObjective={therapyObjective}
        completedSessions={completedSessions}
        totalSessions={totalSessions}
      />
      {fable ? (
        <Aesopp fable={fable} />
      ) : (
        <div> - Look forward to the first update from your therapist! </div>
      )}
      <div>
        <Link to="/Feedback">
          Let your therapist know how you felt about the session!
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
