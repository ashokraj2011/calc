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
      <div className="w-full max-w-md bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--card-border)]">
          <div className="flex items-center gap-2">
            <KeyboardIcon className="w-5 h-5 text-[var(--text-accent)]" />
            <h3 className="font-bold text-lg text-[var(--text-main)]">Keyboard Shortcuts</h3>
          </div>
          <button
            onClick={() => {
              playSound('click', soundEnabled);
              onClose();
            }}
            className="p-1.5 rounded-xl hover:bg-[var(--btn-func-bg)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--display-bg)] border border-[var(--card-border)] text-xs"
            >
              <kbd className="px-2.5 py-1 rounded-lg bg-[var(--btn-func-bg)] font-mono font-bold text-[var(--text-accent)] border border-[var(--card-border)]">
                {sc.key}
              </kbd>
              <span className="text-[var(--text-muted)] font-medium">{sc.desc}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="w-full py-2.5 rounded-xl bg-[var(--btn-eq-bg)] text-[var(--btn-eq-text)] font-bold text-sm hover:bg-[var(--btn-eq-hover)] transition-all shadow-md mt-2"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
