import { useNavigate } from "react-router-dom";

function TherapistHome() {
  const navigate = useNavigate();
  return (
    <div class = "h-screen bg-white">
      <div class = "bg-gradient-to-b from-emerald-300 to-white mb-16">
        <button class = "float-right mt-4 mr-4 rounded-full w-fit bg-white shadow-xl first-line:text-black hover:bg-slate-200 text-2xl px-4 py-2"  
          onClick={(e) => {
            navigate("/");
          }}
        >
          Log out
        </button>
        <div class = "  py-12 px-12 text-4xl font-normal text-black flex justify-start">
          Welcome back, Dr. Anand!
        </div>
        <div class = "text-black outline-black outline-dashed outline-3 outline-offset-2 font-body mt-20 text-3xl pt-6 pb-8 mb-8 overflow-hidden">
            What would you like to do?
        </div>
      </div>
      <div class = "py-24 grid grid-cols-1">
        <button class = "mx-auto py-4 p-2 pl-5 pr-5 bg-transparent border-2 border-emerald-500 text-black text-3xl rounded-full transition-colors duration-700 transform hover:bg-emerald-500 hover:text-gray-100 focus:border-4 focus:border-emerald-300"
          onClick={(e) => {
            navigate("/Update");
          }}
        >
          Update your patient on their therapy session!
        </button>
        <button class = "my-24 mx-auto py-4 p-2 pl-5 pr-5 bg-transparent border-2 border-emerald-500 text-black text-3xl rounded-full transition-colors duration-700 transform hover:bg-emerald-500 hover:text-gray-100 focus:border-4 focus:border-emerald-300"
          onClick={(e) => {
            navigate("/ViewFeedback");
          }}
        >
          Check out feedback from your patient!
        </button>
      </div>
    </div>
  );
}

export default TherapistHome;
