import React, { useState } from 'react';
import { calculateEMI, calculateCompoundInterest, calculateTip, formatNumber } from '../utils/evaluator';
import { Landmark, TrendingUp, Users, DollarSign } from 'lucide-react';
import { playSound } from '../utils/audio';

export const FinancialCalculator = ({ soundEnabled }) => {
  const [subTab, setSubTab] = useState('emi');

  // EMI State
  const [principal, setPrincipal] = useState('500000');
  const [rate, setRate] = useState('8.5');
  const [tenure, setTenure] = useState('5');

  // Compound Interest State
  const [ciPrincipal, setCiPrincipal] = useState('100000');
  const [ciRate, setCiRate] = useState('7');
  const [ciYears, setCiYears] = useState('10');

  // Tip Splitter State
  const [billAmount, setBillAmount] = useState('120');
  const [tipPercent, setTipPercent] = useState('15');
  const [peopleCount, setPeopleCount] = useState('3');

  const emiRes = calculateEMI(principal, rate, tenure);
  const ciRes = calculateCompoundInterest(ciPrincipal, ciRate, ciYears);
  const tipRes = calculateTip(billAmount, tipPercent, peopleCount);

  return (
    <div className="w-full flex flex-col gap-5 animate-fade-in p-1">
      {/* Sub Tabs */}
      <div className="flex u-bg-display-bg p-1 rounded-xl border u-border-card-border">
        <button
          onClick={() => {
            playSound('mode', soundEnabled);
            setSubTab('emi');
          }}
          className={`calc-btn flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            subTab === 'emi'
              ? 'u-bg-text-accent text-slate-950 shadow-md'
              : 'u-text-text-muted u-htext-text-main'
          }`}
        >
          <Landmark className="w-3.5 h-3.5" />
          <span>Loan EMI</span>
        </button>
        <button
          onClick={() => {
            playSound('mode', soundEnabled);
            setSubTab('compound');
          }}
          className={`calc-btn flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            subTab === 'compound'
              ? 'u-bg-text-accent text-slate-950 shadow-md'
              : 'u-text-text-muted u-htext-text-main'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Compound Interest</span>
        </button>
        <button
          onClick={() => {
            playSound('mode', soundEnabled);
            setSubTab('tip');
          }}
          className={`calc-btn flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            subTab === 'tip'
              ? 'u-bg-text-accent text-slate-950 shadow-md'
              : 'u-text-text-muted u-htext-text-main'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Tip Splitter</span>
        </button>
      </div>

      {/* EMI Section */}
      {subTab === 'emi' && (
        <div className="glass-card p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Loan Amount ($)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Tenure (Years)</label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Monthly EMI</span>
              <span className="text-xl font-mono font-bold u-text-text-accent">
                ${formatNumber(emiRes.emi)}
              </span>
            </div>
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Total Interest</span>
              <span className="text-xl font-mono font-bold text-amber-400">
                ${formatNumber(emiRes.totalInterest)}
              </span>
            </div>
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Total Payment</span>
              <span className="text-xl font-mono font-bold u-text-text-main">
                ${formatNumber(emiRes.totalPayment)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Compound Interest Section */}
      {subTab === 'compound' && (
        <div className="glass-card p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Initial Deposit ($)</label>
              <input
                type="number"
                value={ciPrincipal}
                onChange={(e) => setCiPrincipal(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Annual Return (%)</label>
              <input
                type="number"
                step="0.1"
                value={ciRate}
                onChange={(e) => setCiRate(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Time Horizon (Years)</label>
              <input
                type="number"
                value={ciYears}
                onChange={(e) => setCiYears(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Future Portfolio Value</span>
              <span className="text-2xl font-mono font-bold text-emerald-400">
                ${formatNumber(ciRes.amount)}
              </span>
            </div>
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Interest Earned</span>
              <span className="text-2xl font-mono font-bold u-text-text-accent">
                ${formatNumber(ciRes.interest)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tip Splitter Section */}
      {subTab === 'tip' && (
        <div className="glass-card p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Bill Total ($)</label>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Tip Percentage (%)</label>
              <input
                type="number"
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs u-text-text-muted font-medium">Split Between (People)</label>
              <input
                type="number"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Total Tip</span>
              <span className="text-xl font-mono font-bold text-sky-400">
                ${formatNumber(tipRes.tipTotal)}
              </span>
            </div>
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Grand Total</span>
              <span className="text-xl font-mono font-bold u-text-text-main">
                ${formatNumber(tipRes.grandTotal)}
              </span>
            </div>
            <div className="calculator-display flex flex-col gap-1">
              <span className="text-xs u-text-text-muted font-medium">Each Person Pays</span>
              <span className="text-xl font-mono font-bold text-emerald-400">
                ${formatNumber(tipRes.perPerson)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
