import React, { useState } from 'react';

function SavedBuilds({ currentBuild, setCurrentBuild }) {
  const [saved, setSaved] = useState(() => {
    const s = localStorage.getItem('savedBuilds');
    return s ? JSON.parse(s) : [];
  });
  const [name, setName] = useState('');

  const saveBuild = () => {
    if (!name) return;
    const newBuild = { name, parts: currentBuild };
    const updated = [...saved, newBuild];
    setSaved(updated);
    localStorage.setItem('savedBuilds', JSON.stringify(updated));
    setName('');
  };

  const loadBuild = build => {
    setCurrentBuild(build.parts);
  };

  return (
    <div>
      <h2>Saved Builds</h2>
      <input
        value={name}
        placeholder="Build name"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={saveBuild}>Save</button>
      <ul>
        {saved.map(b => (
          <li key={b.name}>
            {b.name}
            <button onClick={() => loadBuild(b)}>Load</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedBuilds;