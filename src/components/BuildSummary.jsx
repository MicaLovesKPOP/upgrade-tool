import React, { useEffect, useState } from 'react';

function BuildSummary({ build }) {
  const [benchmarks, setBenchmarks] = useState({ cpus: {}, gpus: {} });
  const [pricing, setPricing] = useState({ cpus: {}, gpus: {}, psus: {} });

  useEffect(() => {
    // load mock benchmarks & pricing
    fetch('/data/benchmarks.json')
      .then(res => res.json())
      .then(setBenchmarks)
      .catch(console.error);
    fetch('/data/pricing.json')
      .then(res => res.json())
      .then(setPricing)
      .catch(console.error);
  }, []);

  const cpu = build.cpus;
  const gpu = build.gpus;
  const psu = build.psus;

  const totalCost = [cpu, gpu, psu]
    .filter(Boolean)
    .reduce((sum, p) => sum + (pricing[p.category]?.[p.id] ?? p.msrp), 0);

  const totalPower = [cpu, gpu, psu]
    .filter(Boolean)
    .reduce((sum, p) => sum + (p.tdp || p.watt), 0);

  const perfScore = ((cpu && benchmarks.cpus[cpu.id]) || 0) + ((gpu && benchmarks.gpus[gpu.id]) || 0);

  return (
    <div>
      <h2>Build Summary</h2>
      <div>CPU: {cpu?.name || '—'}</div>
      <div>GPU: {gpu?.name || '—'}</div>
      <div>PSU: {psu?.name || '—'}</div>
      <hr />
      <div>Total Cost: €{totalCost}</div>
      <div>Estimated Power Draw: {totalPower} W</div>
      <div>Performance Score: {perfScore}</div>
    </div>
  );
}

export default BuildSummary;