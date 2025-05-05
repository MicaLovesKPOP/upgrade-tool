import React from 'react';

function PartCard({ category, part, onSelectPart }) {
  return (
    <div className="part-card">
      <div><strong>{part.name}</strong></div>
      <div>Power: {part.tdp || part.watt} W</div>
      <div>Price: €{part.msrp}</div>
      <button onClick={() => onSelectPart(category, part)}>Add</button>
    </div>
  );
}

export default PartCard;