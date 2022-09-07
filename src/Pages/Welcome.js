import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div class="h-screen bg-blue-100 bg-gradient-to-b from-sky-400 to-white">
      <div class="font-sans font-semibold mb-4 text-8xl font-semibold text-gray-900 py-28">
        Welcome to Bridge!
      </div>
      <div class="font-mono flex item-center justify-center text-3xl mb-12 mr-6 ">
        I am a ...
      </div>
      <div class="space-x-32 content-center my-28">
        <Link to="/PatientDashboard">
          <button class="rounded-full bg-white shadow-xl first-line:text-white bg-sky-500 hover:bg-sky-700 text-4xl px-12 py-4 mx-auto ">
            Patient
          </button>
        </Link>
        <Link to="/TherapistDashboard">
          <button class="rounded-full bg-white shadow-xl ml-12 first-line:text-white bg-emerald-400 hover:bg-emerald-600 text-4xl px-12 py-4 mx-auto">
            Therapist
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
