import React, { useState } from 'react';
import PartList from './components/PartList';
import BuildSummary from './components/BuildSummary';
import SavedBuilds from './components/SavedBuilds';

const categories = ['cpus', 'gpus', 'psus'];

function App() {
  // current build holds selected part for each category
  const [build, setBuild] = useState({ cpus: null, gpus: null, psus: null });
  const [category, setCategory] = useState('cpus');

  const handleSelectPart = (cat, part) => {
    setBuild(prev => ({ ...prev, [cat]: part }));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>PC Builder</h1>
        <div>
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <PartList category={category} onSelectPart={handleSelectPart} />
        <SavedBuilds currentBuild={build} setCurrentBuild={setBuild} />
      </div>
      <div className="main">
        <BuildSummary build={build} />
      </div>
    </div>
  );
}

export default App;