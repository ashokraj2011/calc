import React from 'react';
import {
  Calculator,
  FlaskConical,
  ArrowRightLeft,
  DollarSign,
  TrendingUp,
  Volume2,
  VolumeX,
  History,
  Keyboard,
  Palette,
} from 'lucide-react';
import { playSound } from '../utils/audio';

const MODES = [
  { id: 'standard', name: 'Standard', icon: Calculator },
  { id: 'scientific', name: 'Scientific', icon: FlaskConical },
  { id: 'converter', name: 'Converter', icon: ArrowRightLeft },
  { id: 'financial', name: 'Financial', icon: DollarSign },
  { id: 'grapher', name: 'Grapher', icon: TrendingUp },
];

const THEMES = [
  { id: 'classic', name: 'Classic Desk' },
  { id: 'midnight', name: 'Midnight Glass' },
  { id: 'cyberpunk', name: 'Cyberpunk Neon' },
  { id: 'terminal', name: 'Retro Terminal' },
  { id: 'pastel', name: 'Soft Pastel' },
  { id: 'light', name: 'Clean Light' },
];

export const Header = ({
  activeMode,
  setActiveMode,
  currentTheme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  toggleHistory,
  toggleKeyboardModal,
}) => {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[var(--card-border)] mb-4">
      {/* App Branding */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-[14px] bg-[var(--btn-op-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--text-accent)] font-bold text-xl shadow-inner">
          ∑
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-[var(--text-main)]">
            Apex<span className="text-[var(--text-accent)]">Calc</span>
          </h1>
          <p className="text-xs text-[var(--text-muted)] font-medium">
            Classic Desk Calculator
          </p>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex items-center gap-1 bg-[var(--display-bg)] p-1 rounded-[14px] border border-[var(--card-border)] overflow-x-auto max-w-full">
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => {
                playSound('mode', soundEnabled);
                setActiveMode(mode.id);
              }}
              className={`classic-tab flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[var(--btn-op-bg)] text-[var(--text-accent)] shadow-sm scale-[1.02]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--btn-func-bg)]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{mode.name}</span>
            </button>
          );
        })}
      </div>

      {/* Quick Action Controls */}
      <div className="flex items-center gap-2">
        {/* Theme Selector */}
        <div className="relative flex items-center bg-[var(--display-bg)] border border-[var(--card-border)] rounded-xl px-2 py-1 text-xs text-[var(--text-main)]">
          <Palette className="w-3.5 h-3.5 text-[var(--text-accent)] mr-1.5" />
          <select
            value={currentTheme}
            onChange={(e) => {
              playSound('click', soundEnabled);
              setTheme(e.target.value);
            }}
            className="bg-transparent border-none outline-none text-xs font-medium text-[var(--text-main)] cursor-pointer pr-1"
          >
            {THEMES.map((t) => (
              <option key={t.id} value={t.id} className="bg-[var(--bg-primary)] text-[var(--text-main)]">
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Audio Sound Toggle */}
        <button
          onClick={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            playSound('click', next);
          }}
          title={soundEnabled ? 'Mute Sounds' : 'Enable Key Sounds'}
          className="p-2 rounded-xl bg-[var(--display-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Keyboard Shortcuts Trigger */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            toggleKeyboardModal();
          }}
          title="Keyboard Shortcuts"
          className="p-2 rounded-xl bg-[var(--display-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
        >
          <Keyboard className="w-4 h-4 text-[var(--text-accent)]" />
        </button>

        {/* History Drawer Trigger */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            toggleHistory();
          }}
          title="Calculation History"
          className="p-2 rounded-xl bg-[var(--display-bg)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors relative"
        >
          <History className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
