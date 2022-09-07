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
      <div class="h-screen">
        <div class ="grid grid-cols-3">
          <div>
            <div class="text-4xl pt-10">
              Welcome back,
            </div>
            <div class="text-6xl pb-10">
              {user.name}
            </div>
          </div>
          
          <div class="pt-10">
            <Tracker
              lastWeek={lastWeek}
              therapyObjective={therapyObjective}
              completedSessions={completedSessions}
              totalSessions={totalSessions}
            />
          </div> 
          
          <div class="justify-center">
            <div class="float-right mt-4 mr-4 rounded-full w-fit first-line:text-black bg-white hover:bg-slate-200 text-2xl px-4 py-2"
              onClick={(e) => {
                navigate("/");
              }}>
              Log out
            </div>
          </div>
          
        </div>

        <div class="grid grid-cols-8 gap-10">
          <div class="col-span-2">
            <div class="justify-center">     
              <div class="w-60 p-2 rounded-full hover:bg-slate-200">
                <Link to="/Feedback">
                  Let your therapist know how you felt about the session!
                </Link>
              </div>
            </div>
          </div>
            
          
          <div class="col-span-4">
            <div class="rounded-3xl px-4 font-bold">  
              {fable ? (
                  <Aesopp fable={fable} />
                ) : (
                  <div class="py-4"> Look forward to the first update from your therapist! </div>
                )}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
