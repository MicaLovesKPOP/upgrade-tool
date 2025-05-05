import React, { useState, useEffect } from 'react';
import PartCard from './PartCard';

function PartList({ category, onSelectPart }) {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    // load mock data; replace with API fetch in future
    fetch(`/data/${category}.json`)
      .then(res => res.json())
      .then(setParts)
      .catch(console.error);
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      {parts.map(part => (
        <PartCard key={part.id} category={category} part={part} onSelectPart={onSelectPart} />
      ))}
    </div>
  );
}

export default PartList;