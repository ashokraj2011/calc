import React, { useState } from 'react';
import { playSound } from '../utils/audio';
import { StandardKeypad } from './StandardKeypad';

export const ScientificKeypad = (props) => {
  const [isSecond, setIsSecond] = useState(false);
  const { onDigit, onOperator, soundEnabled } = props;

  const handleFunc = (fnString) => {
    playSound('operator', soundEnabled);
    onDigit(fnString);
  };

  return (
    <div className="flex flex-col gap-3 w-full animate-fade-in">
      {/* Scientific Functions Toolbar */}
      <div className="sci-toolbar text-xs sm:text-sm">
        {/* 2nd Function Toggle */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            setIsSecond(!isSecond);
          }}
          className={`calc-btn py-2 font-bold transition-colors ${
            isSecond
              ? 'u-bg-text-accent text-slate-950 u-border-text-accent'
              : 'u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover'
          }`}
        >
          2nd
        </button>

        <button
          onClick={() => handleFunc('(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          (
        </button>
        <button
          onClick={() => handleFunc(')')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          )
        </button>
        <button
          onClick={() => handleFunc('π')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          π
        </button>
        <button
          onClick={() => handleFunc('e')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          e
        </button>

        {/* Trig Functions Row */}
        <button
          onClick={() => handleFunc(isSecond ? 'asin(' : 'sin(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          {isSecond ? 'sin⁻¹' : 'sin'}
        </button>
        <button
          onClick={() => handleFunc(isSecond ? 'acos(' : 'cos(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          {isSecond ? 'cos⁻¹' : 'cos'}
        </button>
        <button
          onClick={() => handleFunc(isSecond ? 'atan(' : 'tan(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          {isSecond ? 'tan⁻¹' : 'tan'}
        </button>
        <button
          onClick={() => handleFunc(isSecond ? '10^(' : 'log10(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          {isSecond ? '10ˣ' : 'log'}
        </button>
        <button
          onClick={() => handleFunc(isSecond ? 'e^(' : 'log(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          {isSecond ? 'eˣ' : 'ln'}
        </button>

        {/* Powers & Roots Row */}
        <button
          onClick={() => handleFunc('^2')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          x²
        </button>
        <button
          onClick={() => handleFunc('^')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          xʸ
        </button>

        <button
          onClick={() => handleFunc('sqrt(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          √x
        </button>
        <button
          onClick={() => handleFunc('!')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          n!
        </button>
        <button
          onClick={() => handleFunc('abs(')}
          className="calc-btn py-2 u-bg-btn-func-bg u-text-btn-func-text u-hbg-btn-func-hover font-semibold"
        >
          |x|
        </button>
      </div>

      {/* Main Standard Keypad beneath */}
      <StandardKeypad {...props} />
    </div>
  );
};
