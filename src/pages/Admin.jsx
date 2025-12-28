// Import useState hook
import { useState } from "react";

// Import components
import AddFleetForm from "../components/AddFleetForm";
import FleetList from "../components/FleetList";

// Admin dashboard page
export default function Admin() {
  // State to store fleet data
  const [fleets, setFleets] = useState([]);

  return (
    <div>
      {/* Admin heading */}
      <h1>Admin Dashboard</h1>

      {/* Form to add fleet */}
      <AddFleetForm setFleets={setFleets} />

      {/* Display fleet cards */}
      <FleetList fleets={fleets} setFleets={setFleets} />
    </div>
  );
}