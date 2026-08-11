import { describe, it, expect } from 'vitest';
import { evaluateExpression, formatNumber } from '../utils/evaluator';

// Verifies WRK-1978:AC-003 and WRK-1978:AC-005: the restyle work must not
// change calculation semantics, expression evaluation, or number formatting.
// @ac:AC-003 @ac:AC-005
describe('evaluateExpression (calculation behavior regression)', () => {
  it('evaluates basic arithmetic unchanged', () => {
    expect(evaluateExpression('2 + 2')).toEqual({ result: '4', rawResult: 4, error: null });
    expect(evaluateExpression('10 - 4')).toEqual({ result: '6', rawResult: 6, error: null });
    expect(evaluateExpression('6 × 7')).toEqual({ result: '42', rawResult: 42, error: null });
    expect(evaluateExpression('9 ÷ 3')).toEqual({ result: '3', rawResult: 3, error: null });
  });

  it('handles empty expressions', () => {
    expect(evaluateExpression('')).toEqual({ result: '0', rawResult: 0, error: null });
    expect(evaluateExpression('   ')).toEqual({ result: '0', rawResult: 0, error: null });
  });

  it('evaluates percentages', () => {
    const res = evaluateExpression('50 + 10%');
    expect(res.error).toBeNull();
    expect(res.rawResult).toBeCloseTo(50.1);
  });

  it('evaluates factorials', () => {
    const res = evaluateExpression('5!');
    expect(res.result).toBe('120');
    expect(res.error).toBeNull();
  });

  it('applies degree-mode trig conversion', () => {
    const res = evaluateExpression('sin(90)', 'DEG');
    expect(res.rawResult).toBeCloseTo(1);
  });

  it('applies radian-mode trig conversion (no deg wrapping)', () => {
    const res = evaluateExpression('sin(0)', 'RAD');
    expect(res.rawResult).toBeCloseTo(0);
  });

  it('supports constants pi and e', () => {
    expect(evaluateExpression('π').rawResult).toBeCloseTo(Math.PI);
    expect(evaluateExpression('e').rawResult).toBeCloseTo(Math.E);
  });

  it('reports a recoverable error for malformed expressions', () => {
    const res = evaluateExpression('5 +');
    expect(res.result).toBe('Error');
    expect(res.error).toBeTruthy();
  });

  it('reports a math error for divide-by-zero style overflow', () => {
    const res = evaluateExpression('1 / 0');
    expect(res.result).toBe('Error');
  });
});

describe('formatNumber (display formatting regression)', () => {
  it('adds thousands separators', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('fixes floating point precision artifacts', () => {
    expect(formatNumber(0.1 + 0.2)).toBe('0.3');
  });

  it('returns Error for NaN input', () => {
    expect(formatNumber(NaN)).toBe('Error');
  });

  it('switches to exponential notation for very large numbers', () => {
    expect(formatNumber(1e13)).toContain('e+');
  });
});
