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
      <div className="flex bg-[var(--display-bg)] p-1 rounded-xl border border-[var(--card-border)]">
        <button
          onClick={() => {
            playSound('mode', soundEnabled);
            setSubTab('emi');
          }}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            subTab === 'emi'
              ? 'bg-[var(--text-accent)] text-slate-950 shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
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
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            subTab === 'compound'
              ? 'bg-[var(--text-accent)] text-slate-950 shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
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
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            subTab === 'tip'
              ? 'bg-[var(--text-accent)] text-slate-950 shadow-md'
              : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Tip Splitter</span>
        </button>
      </div>

      {/* EMI Section */}
      {subTab === 'emi' && (
        <div className="bg-[var(--display-bg)] border border-[var(--card-border)] rounded-2xl p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Loan Amount ($)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Tenure (Years)</label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Monthly EMI</span>
              <span className="text-xl font-mono font-bold text-[var(--text-accent)]">
                ${formatNumber(emiRes.emi)}
              </span>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Total Interest</span>
              <span className="text-xl font-mono font-bold text-amber-400">
                ${formatNumber(emiRes.totalInterest)}
              </span>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Total Payment</span>
              <span className="text-xl font-mono font-bold text-[var(--text-main)]">
                ${formatNumber(emiRes.totalPayment)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Compound Interest Section */}
      {subTab === 'compound' && (
        <div className="bg-[var(--display-bg)] border border-[var(--card-border)] rounded-2xl p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Initial Deposit ($)</label>
              <input
                type="number"
                value={ciPrincipal}
                onChange={(e) => setCiPrincipal(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Annual Return (%)</label>
              <input
                type="number"
                step="0.1"
                value={ciRate}
                onChange={(e) => setCiRate(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Time Horizon (Years)</label>
              <input
                type="number"
                value={ciYears}
                onChange={(e) => setCiYears(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Future Portfolio Value</span>
              <span className="text-2xl font-mono font-bold text-emerald-400">
                ${formatNumber(ciRes.amount)}
              </span>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Interest Earned</span>
              <span className="text-2xl font-mono font-bold text-[var(--text-accent)]">
                ${formatNumber(ciRes.interest)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tip Splitter Section */}
      {subTab === 'tip' && (
        <div className="bg-[var(--display-bg)] border border-[var(--card-border)] rounded-2xl p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Bill Total ($)</label>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Tip Percentage (%)</label>
              <input
                type="number"
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[var(--text-muted)] font-medium">Split Between (People)</label>
              <input
                type="number"
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                className="bg-[var(--btn-num-bg)] border border-[var(--card-border)] text-[var(--text-main)] rounded-xl p-2.5 font-mono text-sm font-semibold outline-none focus:border-[var(--text-accent)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Total Tip</span>
              <span className="text-xl font-mono font-bold text-sky-400">
                ${formatNumber(tipRes.tipTotal)}
              </span>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Grand Total</span>
              <span className="text-xl font-mono font-bold text-[var(--text-main)]">
                ${formatNumber(tipRes.grandTotal)}
              </span>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-3.5 rounded-xl flex flex-col gap-1">
              <span className="text-xs text-[var(--text-muted)] font-medium">Each Person Pays</span>
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
