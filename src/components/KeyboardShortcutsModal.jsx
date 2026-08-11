import React from 'react';
import { X, Keyboard as KeyboardIcon } from 'lucide-react';
import { playSound } from '../utils/audio';

export const KeyboardShortcutsModal = ({ isOpen, onClose, soundEnabled }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '0 - 9 / .', desc: 'Input digits and decimal point' },
    { key: '+  -  *  /', desc: 'Basic arithmetic operators' },
    { key: 'Enter / =', desc: 'Calculate result' },
    { key: 'Backspace', desc: 'Delete last character' },
    { key: 'Escape', desc: 'Clear calculation (AC)' },
    { key: '%', desc: 'Percentage calculation' },
    { key: '^', desc: 'Power function (xʸ)' },
    { key: 's / c / t', desc: 'Quick trig (sin, cos, tan)' },
    { key: 'p / e', desc: 'Constants π and e' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="glass-card w-full max-w-md p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-3 border-b u-border-card-border">
          <div className="flex items-center gap-2">
            <KeyboardIcon className="w-5 h-5 u-text-text-accent" />
            <h3 className="font-bold text-lg u-text-text-main">Keyboard Shortcuts</h3>
          </div>
          <button
            onClick={() => {
              playSound('click', soundEnabled);
              onClose();
            }}
            className="calc-btn p-1.5 u-hbg-btn-func-bg u-text-text-muted u-htext-text-main"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="calculator-display flex items-center justify-between text-xs"
            >
              <kbd className="px-2.5 py-1 rounded-lg u-bg-btn-func-bg font-mono font-bold u-text-text-accent border u-border-card-border">
                {sc.key}
              </kbd>
              <span className="u-text-text-muted font-medium">{sc.desc}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="calc-btn w-full py-2.5 u-bg-btn-eq-bg u-text-btn-eq-text font-bold text-sm u-hbg-btn-eq-hover mt-2"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
