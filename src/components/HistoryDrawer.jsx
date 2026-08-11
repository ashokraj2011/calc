import React from 'react';
import { X, Trash2, Download, History as HistoryIcon, CornerDownLeft } from 'lucide-react';
import { playSound } from '../utils/audio';

export const HistoryDrawer = ({
  isOpen,
  onClose,
  history,
  onSelectHistory,
  onClearHistory,
  soundEnabled,
}) => {
  if (!isOpen) return null;

  const handleExport = () => {
    playSound('click', soundEnabled);
    if (history.length === 0) return;
    const content = history.map((h) => `${h.timestamp}: ${h.expression} = ${h.result}`).join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ApexCalc_History_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="glass-card w-full max-w-sm h-full p-5 flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b u-border-card-border">
          <div className="flex items-center gap-2">
            <HistoryIcon className="w-4 h-4 u-text-text-accent" />
            <h2 className="font-bold text-base u-text-text-main">Calculation History</h2>
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

        {/* History List */}
        <div className="flex-1 overflow-y-auto my-4 flex flex-col gap-3 pr-1">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center u-text-text-muted text-xs gap-2">
              <HistoryIcon className="w-8 h-8 opacity-40" />
              <span>No recent calculations yet.</span>
            </div>
          ) : (
            history.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  playSound('click', soundEnabled);
                  onSelectHistory(item);
                }}
                className="calculator-display group cursor-pointer flex flex-col gap-1 relative"
              >
                <div className="flex items-center justify-between text-[10px] u-text-text-muted font-mono">
                  <span>{item.timestamp}</span>
                  <span className="opacity-0 group-hover:opacity-100 u-text-text-accent flex items-center gap-0.5">
                    Reuse <CornerDownLeft className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-xs font-mono u-text-text-muted truncate">
                  {item.expression} =
                </div>
                <div className="text-base font-mono font-bold u-text-text-accent">
                  {item.result}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Actions Footer */}
        <div className="pt-4 border-t u-border-card-border flex items-center justify-between gap-3">
          <button
            onClick={handleExport}
            disabled={history.length === 0}
            className="calc-btn flex-1 flex items-center justify-center gap-2 py-2 px-3 u-bg-btn-func-bg u-text-text-main text-xs font-semibold u-hbg-btn-func-hover disabled:opacity-40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
          <button
            onClick={() => {
              playSound('clear', soundEnabled);
              onClearHistory();
            }}
            disabled={history.length === 0}
            className="calc-btn flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-rose-500/15 text-rose-400 text-xs font-semibold hover:bg-rose-500/25 disabled:opacity-40"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Log</span>
          </button>
        </div>
      </div>
    </div>
  );
};
