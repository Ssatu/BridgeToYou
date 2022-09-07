import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TherapistView() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div>
      <button class = "float-right mt-4 mr-4 rounded-full w-fit bg-white shadow-xl first-line:text-black bg-white hover:bg-slate-200 text-2xl px-4 py-2" 
        onClick={(e) => {
          navigate("/TherapistDashboard");
        }}
      >
        Back
      </button >
      <div class = "bg-gradient-to-b from-emerald-300 to-white mb-16">
        <h1 class = "py-20 font-semibold text-4xl"> 
          This was how George felt about the previous session ... 
        </h1>
      </div>
      <div> 
        <h2 class = "text-3xl">
          <h3 class = "bg-transparent border-2 border-emerald-500 text-black mx-96">
            <div class = "py-2 text-3xl"> Your patient felt these emotions:</div>
            <div class = "underline text-medium"> {user.emotions.map((x) => {
              return(
              <div class = "py-4">
                {x.emotion}
                {x.icon}
              </div>);
            })} </div>
          </h3>
          <div>
            <div class = "py-12 ml-4 text-3xl"> Here's what they had to say: </div>
            <div class = "font-sans mt-4 pb-60 text-xl text-center"> {user.feedback} </div>
          </div>
        </h2>
      </div>
    </div>
    
  );
}

export default TherapistView;
