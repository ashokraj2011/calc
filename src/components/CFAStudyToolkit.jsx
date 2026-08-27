import React, { useMemo, useState } from 'react';
import { BookOpenText, Calculator, CircleDollarSign, Landmark, Percent, TrendingUp } from 'lucide-react';

const TOPIC_OPTIONS = [
  'Quantitative Methods',
  'Economics',
  'Financial Statement Analysis',
  'Corporate Issuers',
  'Equity',
  'Fixed Income',
  'Derivatives',
  'Alternative Investments',
  'Portfolio Management',
];

const formatCurrency = (value) => {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const getTopicDefinition = (topic) => {
  switch (topic) {
    case 'Quantitative Methods':
      return {
        icon: Calculator,
        description: 'Time value of money and compounding',
        inputs: [
          { id: 'present-value', label: 'Present value', key: 'principal', defaultValue: '1000' },
          { id: 'annual-rate', label: 'Annual rate', key: 'rate', defaultValue: '5' },
          { id: 'years', label: 'Years', key: 'years', defaultValue: '5' },
        ],
        formula: (principal, rate, years) => principal * Math.pow(1 + rate / 100, years),
        resultLabel: 'Future value',
      };
    case 'Economics':
      return {
        icon: TrendingUp,
        description: 'Growth and marginal impact',
        inputs: [
          { id: 'economic-base', label: 'Base value', key: 'principal', defaultValue: '2500' },
          { id: 'economic-growth', label: 'Growth rate', key: 'rate', defaultValue: '3' },
          { id: 'economic-years', label: 'Years', key: 'years', defaultValue: '4' },
        ],
        formula: (principal, rate, years) => principal * Math.pow(1 + rate / 100, years),
        resultLabel: 'Projected value',
      };
    case 'Financial Statement Analysis':
      return {
        icon: Landmark,
        description: 'Profit and leverage snapshots',
        inputs: [
          { id: 'net-income', label: 'Net income', key: 'principal', defaultValue: '80000' },
          { id: 'margin-rate', label: 'Margin rate', key: 'rate', defaultValue: '12' },
          { id: 'analysis-years', label: 'Periods', key: 'years', defaultValue: '3' },
        ],
        formula: (principal, rate, years) => principal * (1 + rate / 100) * years,
        resultLabel: 'Adjusted value',
      };
    case 'Corporate Issuers':
      return {
        icon: CircleDollarSign,
        description: 'Capital structure and leverage',
        inputs: [
          { id: 'issuer-value', label: 'Enterprise value', key: 'principal', defaultValue: '1500000' },
          { id: 'issuer-rate', label: 'Debt ratio', key: 'rate', defaultValue: '8' },
          { id: 'issuer-years', label: 'Periods', key: 'years', defaultValue: '2' },
        ],
        formula: (principal, rate, years) => principal * (1 + rate / 100) * years,
        resultLabel: 'Debt impact',
      };
    case 'Equity':
      return {
        icon: Percent,
        description: 'Return and valuation',
        inputs: [
          { id: 'equity-principal', label: 'Investment', key: 'principal', defaultValue: '2000' },
          { id: 'equity-rate', label: 'Return rate', key: 'rate', defaultValue: '7' },
          { id: 'equity-years', label: 'Years', key: 'years', defaultValue: '6' },
        ],
        formula: (principal, rate, years) => principal * Math.pow(1 + rate / 100, years),
        resultLabel: 'Ending value',
      };
    case 'Fixed Income':
      return {
        icon: BookOpenText,
        description: 'Bond yield and pricing',
        inputs: [
          { id: 'bond-principal', label: 'Bond value', key: 'principal', defaultValue: '1200' },
          { id: 'bond-rate', label: 'Coupon rate', key: 'rate', defaultValue: '4.5' },
          { id: 'bond-years', label: 'Years to maturity', key: 'years', defaultValue: '5' },
        ],
        formula: (principal, rate, years) => principal * (1 + rate / 100) * years,
        resultLabel: 'Bond value',
      };
    case 'Derivatives':
      return {
        icon: TrendingUp,
        description: 'Option payoff and sensitivity',
        inputs: [
          { id: 'derivative-premium', label: 'Premium', key: 'principal', defaultValue: '100' },
          { id: 'derivative-rate', label: 'Volatility', key: 'rate', defaultValue: '18' },
          { id: 'derivative-years', label: 'Periods', key: 'years', defaultValue: '4' },
        ],
        formula: (principal, rate, years) => principal * (1 + rate / 100) * years,
        resultLabel: 'Option value',
      };
    case 'Alternative Investments':
      return {
        icon: BookOpenText,
        description: 'Private market return assumptions',
        inputs: [
          { id: 'alt-principal', label: 'Initial investment', key: 'principal', defaultValue: '50000' },
          { id: 'alt-rate', label: 'Annual return', key: 'rate', defaultValue: '9' },
          { id: 'alt-years', label: 'Years', key: 'years', defaultValue: '7' },
        ],
        formula: (principal, rate, years) => principal * Math.pow(1 + rate / 100, years),
        resultLabel: 'Portfolio value',
      };
    case 'Portfolio Management':
      return {
        icon: CircleDollarSign,
        description: 'Diversified portfolio outcomes',
        inputs: [
          { id: 'portfolio-principal', label: 'Portfolio value', key: 'principal', defaultValue: '40000' },
          { id: 'portfolio-rate', label: 'Annual return', key: 'rate', defaultValue: '8' },
          { id: 'portfolio-years', label: 'Years', key: 'years', defaultValue: '5' },
        ],
        formula: (principal, rate, years) => principal * Math.pow(1 + rate / 100, years),
        resultLabel: 'Portfolio end value',
      };
    default:
      return {
        icon: Calculator,
        description: 'Study toolkit',
        inputs: [
          { id: 'default-principal', label: 'Principal', key: 'principal', defaultValue: '1000' },
          { id: 'default-rate', label: 'Rate', key: 'rate', defaultValue: '5' },
          { id: 'default-years', label: 'Years', key: 'years', defaultValue: '5' },
        ],
        formula: (principal, rate, years) => principal * Math.pow(1 + rate / 100, years),
        resultLabel: 'Result',
      };
  }
};

export const CFAStudyToolkit = ({ soundEnabled }) => {
  const [selectedTopic, setSelectedTopic] = useState(TOPIC_OPTIONS[0]);
  const [fieldValues, setFieldValues] = useState({
    principal: '1000',
    rate: '5',
    years: '5',
  });

  const definition = useMemo(() => getTopicDefinition(selectedTopic), [selectedTopic]);
  const Icon = definition.icon;

  const updateField = (key, value) => {
    setFieldValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    const nextInputs = getTopicDefinition(topic).inputs;
    setFieldValues(Object.fromEntries(nextInputs.map((input) => [input.key, input.defaultValue])));
  };

  const principal = Number.parseFloat(fieldValues.principal);
  const rate = Number.parseFloat(fieldValues.rate);
  const years = Number.parseFloat(fieldValues.years);
  const validValues = [principal, rate, years].every((value) => Number.isFinite(value) && value >= 0);
  const result = validValues ? definition.formula(principal, rate, years) : null;

  return (
    <div className="w-full flex flex-col gap-4 animate-fade-in p-1">
      <div className="glass-card p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl border u-border-card-border u-bg-display-bg flex items-center justify-center">
              <Icon className="w-4 h-4 u-text-text-accent" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] u-text-text-muted">CFA Level I</div>
              <div className="text-lg font-bold u-text-text-main">Study toolkit</div>
            </div>
          </div>
        </div>

        <label className="flex flex-col gap-1 text-sm u-text-text-main">
          <span className="font-medium">Select a topic</span>
          <select
            aria-label="Select a topic"
            value={selectedTopic}
            onChange={(event) => handleTopicChange(event.target.value)}
            className="u-bg-btn-num-bg border u-border-card-border rounded-xl px-3 py-2.5 outline-none u-text-text-main"
          >
            {TOPIC_OPTIONS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>

        <div className="rounded-xl border u-border-card-border u-bg-display-bg p-3 text-sm u-text-text-muted">
          {definition.description}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {definition.inputs.map((input) => (
            <label key={input.id} className="flex flex-col gap-1 text-xs u-text-text-muted font-medium">
              {input.label}
              <input
                id={input.id}
                type="number"
                min="0"
                step="any"
                value={fieldValues[input.key]}
                onChange={(event) => updateField(input.key, event.target.value)}
                className="u-bg-btn-num-bg border u-border-card-border u-text-text-main rounded-xl p-2.5 font-mono text-sm font-semibold outline-none u-fborder-text-accent"
              />
            </label>
          ))}
        </div>

        <div className="calculator-display p-4 rounded-xl">
          {validValues ? (
            <>
              <div className="text-xs uppercase tracking-[0.2em] u-text-text-muted">{definition.resultLabel}</div>
              <div className="text-3xl font-mono font-bold u-text-text-main mt-2">${formatCurrency(result)}</div>
            </>
          ) : (
            <div className="text-base font-medium text-amber-400">Please provide valid values</div>
          )}
        </div>
      </div>
    </div>
  );
};
