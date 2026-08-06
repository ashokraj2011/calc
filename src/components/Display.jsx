import React, { useState } from 'react';
import { Copy, Check, Delete, RotateCcw } from 'lucide-react';
import { playSound } from '../utils/audio';

export const Display = ({
  expression,
  result,
  angleUnit,
  setAngleUnit,
  memoryValue,
  soundEnabled,
  onBackspace,
  onClear,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = result && result !== '0' ? result : expression;
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    playSound('click', soundEnabled);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[var(--display-bg)] border border-[var(--display-border)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-inner mb-4 transition-all relative overflow-hidden">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-2">
        <div className="flex items-center gap-2">
          {/* DEG / RAD Toggle Pill */}
          <button
            onClick={() => {
              playSound('click', soundEnabled);
              setAngleUnit(angleUnit === 'DEG' ? 'RAD' : 'DEG');
            }}
            className="px-2 py-0.5 rounded-md bg-[var(--btn-func-bg)] border border-[var(--card-border)] hover:text-[var(--text-main)] font-semibold transition-colors"
          >
            {angleUnit}
          </button>

          {/* Memory Indicator */}
          {memoryValue !== null && memoryValue !== 0 && (
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 animate-pulse">
              M: {memoryValue}
            </span>
          )}
        </div>

        {/* Display Utility Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              playSound('clear', soundEnabled);
              onClear();
            }}
            title="Clear All (Esc)"
            className="p-1.5 rounded-lg hover:bg-rose-500/20 text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              playSound('digit', soundEnabled);
              onBackspace();
            }}
            title="Backspace"
            className="p-1.5 rounded-lg hover:bg-[var(--btn-func-bg)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <Delete className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopy}
            title="Copy Result"
            className="p-1.5 rounded-lg hover:bg-[var(--btn-func-bg)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors flex items-center gap-1"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Math Expression Line */}
      <div className="w-full text-right font-mono text-sm sm:text-base text-[var(--text-muted)] min-h-[24px] overflow-x-auto whitespace-nowrap scrollbar-none tracking-wide">
        {expression || ' '}
      </div>

      {/* Main Result Output */}
      <div className="w-full text-right font-mono text-3xl sm:text-4xl font-bold text-[var(--text-main)] overflow-x-auto whitespace-nowrap scrollbar-none tracking-tight mt-1 transition-all">
        {result || '0'}
      </div>
    </div>
  );
};
