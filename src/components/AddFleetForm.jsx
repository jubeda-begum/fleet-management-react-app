// Import useState hook
import { useState } from "react";

// Form to add new fleet
export default function AddFleetForm({ setFleets }) {
  // Vehicle number state
  const [regNo, setRegNo] = useState("");

  // Driver name state
  const [driver, setDriver] = useState("");

  // Add fleet to list
  const addFleet = () => {
    // Validate inputs
    if (!regNo.trim() || !driver.trim()) {
      alert("Fields cannot be empty");
      return;
    }

    // Add new fleet object
    setFleets((prev) => [
      ...prev,
      {
        id: Date.now(),
        regNo,
        driver,
        available: true,
      },
    ]);

    // Clear input fields
    setRegNo("");
    setDriver("");
  };

  return (
    <div>
      {/* Vehicle number input */}
      <input
        placeholder="Vehicle No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />

      {/* Driver name input */}
      <input
        placeholder="Driver Name"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />

      {/* Add button */}
      <button onClick={addFleet}>Add Fleet</button>
    </div>
  );
}