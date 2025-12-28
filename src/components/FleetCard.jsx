// Import memo for performance optimization
import { memo } from "react";

// Fleet card component
function FleetCard({ fleet, setFleets }) {
  // Toggle availability status
  const toggleAvailability = () => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === fleet.id ? { ...f, available: !f.available } : f
      )
    );
  };

  // Delete vehicle with confirmation
  const deleteFleet = () => {
    if (confirm("Delete vehicle?")) {
      setFleets((prev) => prev.filter((f) => f.id !== fleet.id));
    }
  };

  return (
    <div className="card">
      {/* Static vehicle image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
        alt="vehicle"
        className="vehicle-img"
      />

      {/* Vehicle registration number */}
      <p><b>Vehicle No:</b> {fleet.regNo}</p>

      {/* Driver name */}
      <p><b>Driver:</b> {fleet.driver}</p>

      {/* Availability status */}
      <p>
        <b>Status:</b> {fleet.available ? "Available" : "Unavailable"}
      </p>

      {/* Toggle availability */}
      <button onClick={toggleAvailability}>Toggle</button>

      {/* Delete vehicle */}
      <button onClick={deleteFleet}>Delete</button>
    </div>
  );
}

// Export memoized component
export default memo(FleetCard);