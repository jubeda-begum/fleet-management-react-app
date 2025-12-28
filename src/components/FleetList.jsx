// Import FleetCard component
import FleetCard from "./FleetCard";

// Render all fleets as cards
export default function FleetList({ fleets, setFleets }) {
  return (
    <div className="grid">
      {fleets.map((fleet) => (
        <FleetCard
          key={fleet.id}
          fleet={fleet}
          setFleets={setFleets}
        />
      ))}
    </div>
  );
}