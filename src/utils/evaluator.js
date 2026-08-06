import * as math from 'mathjs';

// Custom evaluator wrapper around mathjs with degree/radian support and error handling
export const evaluateExpression = (expr, angleUnit = 'DEG') => {
  if (!expr || expr.trim() === '') return { result: '0', rawResult: 0, error: null };

  try {
    let sanitized = expr
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π/g, 'pi')
      .replace(/e/g, 'e')
      .replace(/√\(([^)]+)\)/g, 'sqrt($1)')
      .replace(/√([0-9.]+)/g, 'sqrt($1)');

    // Handle percentage calculations e.g. 50 + 10% -> 50 + (50 * 0.1) or 50% -> 0.5
    // Simple trailing % replacement
    sanitized = sanitized.replace(/([0-9.]+)\%/g, '($1 / 100)');

    // Factorial handling n! -> factorial(n)
    sanitized = sanitized.replace(/([0-9.]+)!/g, 'factorial($1)');

    // Angle unit adjustments for sin, cos, tan
    if (angleUnit === 'DEG') {
      // Replace sin(x) with sin(x deg), cos(x) with cos(x deg), tan(x) with tan(x deg)
      // Care for asin, acos, atan which return angles
      sanitized = sanitized.replace(/\bsin\(([^)]+)\)/g, 'sin(($1) deg)');
      sanitized = sanitized.replace(/\bcos\(([^)]+)\)/g, 'cos(($1) deg)');
      sanitized = sanitized.replace(/\btan\(([^)]+)\)/g, 'tan(($1) deg)');
    }

    const val = math.evaluate(sanitized);

    if (typeof val === 'function') {
      return { result: 'Error', rawResult: null, error: 'Incomplete Expression' };
    }

    if (typeof val === 'object' && val !== null && 'value' in val) {
      // Handle mathjs Unit output
      return { result: formatNumber(val.value), rawResult: val.value, error: null };
    }

    if (typeof val === 'number') {
      if (isNaN(val) || !isFinite(val)) {
        return { result: 'Error', rawResult: null, error: 'Math Error' };
      }
      return { result: formatNumber(val), rawResult: val, error: null };
    }

    return { result: String(val), rawResult: val, error: null };
  } catch (err) {
    return { result: 'Error', rawResult: null, error: err.message || 'Syntax Error' };
  }
};

// Formats big numbers, floats, and removes precision artifacts like 0.1 + 0.2 = 0.30000000000000004
export const formatNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) return 'Error';

  // Fix float precision issues e.g. 0.0000000000000001
  const rounded = parseFloat(num.toFixed(10));

  if (Math.abs(rounded) > 1e12 || (Math.abs(rounded) < 1e-7 && rounded !== 0)) {
    return rounded.toExponential(6);
  }

  // Format integer or float cleanly
  const str = rounded.toString();
  const parts = str.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

// Unit conversions table and logic
export const UNIT_TYPES = {
  length: {
    name: 'Length',
    units: {
      m: { name: 'Meters (m)', factor: 1 },
      km: { name: 'Kilometers (km)', factor: 1000 },
      cm: { name: 'Centimeters (cm)', factor: 0.01 },
      mm: { name: 'Millimeters (mm)', factor: 0.001 },
      mi: { name: 'Miles (mi)', factor: 1609.344 },
      yd: { name: 'Yards (yd)', factor: 0.9144 },
      ft: { name: 'Feet (ft)', factor: 0.3048 },
      in: { name: 'Inches (in)', factor: 0.0254 },
    },
  },
  weight: {
    name: 'Weight / Mass',
    units: {
      kg: { name: 'Kilograms (kg)', factor: 1 },
      g: { name: 'Grams (g)', factor: 0.001 },
      mg: { name: 'Milligrams (mg)', factor: 0.000001 },
      lb: { name: 'Pounds (lbs)', factor: 0.45359237 },
      oz: { name: 'Ounces (oz)', factor: 0.0283495231 },
      t: { name: 'Metric Tons (t)', factor: 1000 },
    },
  },
  temperature: {
    name: 'Temperature',
    units: {
      c: { name: 'Celsius (°C)' },
      f: { name: 'Fahrenheit (°F)' },
      k: { name: 'Kelvin (K)' },
    },
    convert: (value, from, to) => {
      let celsius;
      if (from === 'c') celsius = value;
      else if (from === 'f') celsius = (value - 32) * (5 / 9);
      else if (from === 'k') celsius = value - 273.15;

      if (to === 'c') return celsius;
      if (to === 'f') return celsius * (9 / 5) + 32;
      if (to === 'k') return celsius + 273.15;
      return celsius;
    },
  },
  digital: {
    name: 'Digital Data',
    units: {
      B: { name: 'Bytes (B)', factor: 1 },
      KB: { name: 'Kilobytes (KB)', factor: 1024 },
      MB: { name: 'Megabytes (MB)', factor: 1024 * 1024 },
      GB: { name: 'Gigabytes (GB)', factor: 1024 * 1024 * 1024 },
      TB: { name: 'Terabytes (TB)', factor: 1024 * 1024 * 1024 * 1024 },
    },
  },
  speed: {
    name: 'Speed',
    units: {
      ms: { name: 'Meters / sec (m/s)', factor: 1 },
      kmh: { name: 'Kilometers / hr (km/h)', factor: 0.277777778 },
      mph: { name: 'Miles / hr (mph)', factor: 0.44704 },
      knot: { name: 'Knots (kt)', factor: 0.514444 },
    },
  },
};

export const convertUnits = (value, category, fromUnit, toUnit) => {
  const val = parseFloat(value);
  if (isNaN(val)) return '0';

  const catData = UNIT_TYPES[category];
  if (!catData) return '0';

  if (category === 'temperature') {
    const res = catData.convert(val, fromUnit, toUnit);
    return formatNumber(res);
  }

  const fromFactor = catData.units[fromUnit]?.factor || 1;
  const toFactor = catData.units[toUnit]?.factor || 1;

  const baseMetersOrKg = val * fromFactor;
  const targetVal = baseMetersOrKg / toFactor;
  return formatNumber(targetVal);
};

// Financial Calculators
export const calculateEMI = (principal, annualRate, tenureYears) => {
  const p = parseFloat(principal);
  const r = parseFloat(annualRate) / 12 / 100;
  const n = parseFloat(tenureYears) * 12;

  if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || n <= 0) {
    return { emi: 0, totalInterest: 0, totalPayment: 0 };
  }

  const emi = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
  };
};

export const calculateCompoundInterest = (principal, annualRate, years, compoundsPerYear = 1) => {
  const P = parseFloat(principal);
  const r = parseFloat(annualRate) / 100;
  const t = parseFloat(years);
  const n = parseFloat(compoundsPerYear);

  if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || t <= 0) {
    return { amount: 0, interest: 0 };
  }

  const amount = P * Math.pow(1 + r / n, n * t);
  const interest = amount - P;

  return {
    amount: Math.round(amount),
    interest: Math.round(interest),
  };
};

export const calculateTip = (billAmount, tipPercent, peopleCount) => {
  const bill = parseFloat(billAmount);
  const tipPct = parseFloat(tipPercent);
  const people = parseInt(peopleCount, 10);

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
    return { tipTotal: 0, grandTotal: 0, perPerson: 0 };
  }

  const tipTotal = bill * (tipPct / 100);
  const grandTotal = bill + tipTotal;
  const perPerson = grandTotal / people;

  return {
    tipTotal: parseFloat(tipTotal.toFixed(2)),
    grandTotal: parseFloat(grandTotal.toFixed(2)),
    perPerson: parseFloat(perPerson.toFixed(2)),
  };
};
