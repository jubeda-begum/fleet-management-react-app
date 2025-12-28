import { useState } from "react";
import AddFleetForm from "../components/AddFleetForm";
import FleetList from "../components/FleetList";
export default function Admin() {
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
