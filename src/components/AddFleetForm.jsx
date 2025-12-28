import { useState } from "react";
export default function AddFleetForm({ setFleets }) {
  const [regNo, setRegNo] = useState("");
  const [driver, setDriver] = useState("");
  const addFleet = () => {
    if (!regNo.trim() || !driver.trim()) {
      alert("Fields cannot be empty");
      return;
    }
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
