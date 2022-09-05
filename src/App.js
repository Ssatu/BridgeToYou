import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Welcome from "./Pages/Welcome";
import Dashboard from "./Pages/Dashboard";
import PatientFeedback from "./Pages/PatientFeedback";
import TherapistHome from "./Pages/TherapistHome";
import TherapistSubmit from "./Pages/TherapistSubmit";
import TherapistView from "./Pages/TherapistView";
import Store from "./Store.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="PatientDashboard" element={<Dashboard />} />
          <Route path="Feedback" element={<PatientFeedback />} />
          <Route path="Update" element={<TherapistSubmit />} />
          <Route path="ViewFeedback" element={<TherapistView />} />
          <Route path="TherapistDashboard" element={<TherapistHome />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
