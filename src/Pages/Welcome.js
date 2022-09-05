import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <div>Welcome to bridge.</div>
      <div>
        <Link to="/PatientDashboard">
          <div>Patient</div>
        </Link>
        <Link to="/TherapistDashboard">
          <button>Therapist</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
