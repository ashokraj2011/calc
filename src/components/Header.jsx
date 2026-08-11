import React, { useState } from 'react';
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
  Menu,
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
  { id: 'win11-light', name: 'Windows 11 Light' },
  { id: 'win11-dark', name: 'Windows 11 Dark' },
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
  // Local-only UI state for the Fluent-style navigation affordance (desktop
  // slide-out rail). This does not need to be lifted to App.jsx since it is
  // purely presentational and has no effect on calculator behavior.
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b u-border-card-border mb-4">
      {/* App Branding */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-[14px] u-bg-btn-op-bg border u-border-card-border flex items-center justify-center u-text-text-accent font-bold text-xl shadow-inner">
          ∑
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight u-text-text-main">
            Apex<span className="u-text-text-accent">Calc</span>
          </h1>
          <p className="text-xs u-text-text-muted font-medium">
            Classic Desk Calculator
          </p>
        </div>
      </div>

      {/* Mode Navigation: Fluent-style NavigationView affordance —
          a slide-out rail at desktop widths, a compact dropdown at mobile
          widths (Windows 11 Calculator itself uses a hamburger NavigationView). */}
      <nav className="w-full md:w-auto max-w-full">
        {/* Desktop slide-out rail */}
        <div className={`nav-rail ${isNavExpanded ? 'expanded' : ''}`}>
          <button
            type="button"
            onClick={() => {
              playSound('click', soundEnabled);
              setIsNavExpanded((prev) => !prev);
            }}
            title={isNavExpanded ? 'Collapse navigation' : 'Expand navigation'}
            className="nav-rail-toggle"
          >
            <Menu className="w-3.5 h-3.5" />
          </button>
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
                className={`nav-rail-item classic-tab ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="nav-rail-label">{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile compact dropdown */}
        <div className="nav-mobile">
          <div className="nav-mobile-select">
            {(() => {
              const ActiveIcon = MODES.find((m) => m.id === activeMode)?.icon || Calculator;
              return <ActiveIcon className="w-3.5 h-3.5 u-text-text-accent shrink-0" />;
            })()}
            <select
              value={activeMode}
              onChange={(e) => {
                playSound('mode', soundEnabled);
                setActiveMode(e.target.value);
              }}
            >
              {MODES.map((mode) => (
                <option key={mode.id} value={mode.id} className="u-bg-bg-primary u-text-text-main">
                  {mode.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Quick Action Controls */}
      <div className="flex items-center gap-2">
        {/* Theme Selector */}
        <div className="relative flex items-center u-bg-display-bg border u-border-card-border rounded-xl px-2 py-1 text-xs u-text-text-main">
          <Palette className="w-3.5 h-3.5 u-text-text-accent mr-1.5" />
          <select
            value={currentTheme}
            onChange={(e) => {
              playSound('click', soundEnabled);
              setTheme(e.target.value);
            }}
            className="bg-transparent border-none outline-none text-xs font-medium u-text-text-main cursor-pointer pr-1"
          >
            {THEMES.map((t) => (
              <option key={t.id} value={t.id} className="u-bg-bg-primary u-text-text-main">
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
          className="p-2 rounded-xl u-bg-display-bg border u-border-card-border u-text-text-muted u-htext-text-main transition-colors"
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
          className="p-2 rounded-xl u-bg-display-bg border u-border-card-border u-text-text-muted u-htext-text-main transition-colors"
        >
          <Keyboard className="w-4 h-4 u-text-text-accent" />
        </button>

        {/* History Drawer Trigger */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            toggleHistory();
          }}
          title="Calculation History"
          className="p-2 rounded-xl u-bg-display-bg border u-border-card-border u-text-text-muted u-htext-text-main transition-colors relative"
        >
          <History className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
