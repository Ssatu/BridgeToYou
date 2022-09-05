import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div class ="h-screen bg-blue-600">
      <div class ="font-bold text-9xl basis-10">
        Welcome to Bridge.
      </div>
      <div class ="flex items-center justify-center px-6 py-6">
        <Link to="/PatientDashboard">
          <div class = "px-8 py-8">
            Patient
            </div>
        </Link>
        <Link to="/TherapistDashboard">
          <button>Therapist</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
