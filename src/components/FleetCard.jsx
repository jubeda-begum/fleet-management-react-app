import { memo } from "react";
function FleetCard({ fleet, setFleets }) {
  const toggleAvailability = () => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === fleet.id ? { ...f, available: !f.available } : f
      )
    );
  };
  const deleteFleet = () => {
    if (confirm("Delete vehicle?")) {
      setFleets((prev) => prev.filter((f) => f.id !== fleet.id));
    }
  };

  return (
    <div className="card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
        alt="vehicle"
        className="vehicle-img"
      />
      <p><b>Vehicle No:</b> {fleet.regNo}</p>
      <p><b>Driver:</b> {fleet.driver}</p>
      <p>
        <b>Status:</b> {fleet.available ? "Available" : "Unavailable"}
      </p>
      <button onClick={toggleAvailability}>Toggle</button>
      <button onClick={deleteFleet}>Delete</button>
    </div>
  );
}
export default memo(FleetCard);
