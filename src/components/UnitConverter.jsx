import React, { useState } from 'react';
import { UNIT_TYPES, convertUnits } from '../utils/evaluator';
import { ArrowRightLeft, Ruler, Weight, Thermometer, HardDrive, Gauge } from 'lucide-react';
import { playSound } from '../utils/audio';

const CATEGORY_ICONS = {
  length: Ruler,
  weight: Weight,
  temperature: Thermometer,
  digital: HardDrive,
  speed: Gauge,
};

export const UnitConverter = ({ soundEnabled }) => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('km');
  const [inputValue, setInputValue] = useState('1');

  const currentCatData = UNIT_TYPES[category];
  const unitsList = Object.keys(currentCatData.units);

  const convertedResult = convertUnits(inputValue, category, fromUnit, toUnit);

  const handleCategoryChange = (catKey) => {
    playSound('mode', soundEnabled);
    setCategory(catKey);
    const catUnits = Object.keys(UNIT_TYPES[catKey].units);
    setFromUnit(catUnits[0]);
    setToUnit(catUnits[1] || catUnits[0]);
  };

  const handleSwap = () => {
    playSound('click', soundEnabled);
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <div className="w-full flex flex-col gap-5 animate-fade-in p-1">
      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {Object.entries(UNIT_TYPES).map(([catKey, data]) => {
          const Icon = CATEGORY_ICONS[catKey] || Ruler;
          const isActive = category === catKey;
          return (
            <button
              key={catKey}
              onClick={() => handleCategoryChange(catKey)}
              className={`calc-btn flex items-center justify-center gap-2 p-2.5 text-xs font-semibold transition-all ${
                isActive
                  ? 'u-bg-text-accent text-slate-950 shadow-md scale-[1.02]'
                  : 'u-bg-btn-func-bg u-text-text-muted u-htext-text-main u-hbg-btn-func-hover'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{data.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Conversion Card */}
      <div className="glass-card p-5 flex flex-col gap-4">
        {/* From Section */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-xs u-text-text-muted font-medium">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 text-sm font-semibold outline-none cursor-pointer"
            >
              {unitsList.map((uKey) => (
                <option key={uKey} value={uKey} className="u-bg-bg-primary">
                  {currentCatData.units[uKey].name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className="text-xs u-text-text-muted font-medium">Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 text-lg font-mono font-bold outline-none u-fborder-text-accent"
            />
          </div>
        </div>

        {/* Swap Button Divider */}
        <div className="flex justify-center my-1">
          <button
            onClick={handleSwap}
            title="Swap Units"
            className="calc-btn p-2.5 rounded-full u-bg-btn-func-bg u-text-text-accent hover:scale-110 transition-transform shadow-md"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </button>
        </div>

        {/* To Section */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-xs u-text-text-muted font-medium">To</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 text-sm font-semibold outline-none cursor-pointer"
            >
              {unitsList.map((uKey) => (
                <option key={uKey} value={uKey} className="u-bg-bg-primary">
                  {currentCatData.units[uKey].name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <label className="text-xs u-text-text-muted font-medium">Result</label>
            <div className="calculator-display u-text-text-accent text-xl font-mono font-bold overflow-x-auto min-h-[46px] flex items-center">
              {convertedResult}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
