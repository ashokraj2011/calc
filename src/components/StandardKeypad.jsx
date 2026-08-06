import React from 'react';
import { Delete, Divide, X, Minus, Plus, Equal, Percent } from 'lucide-react';
import { playSound } from '../utils/audio';

export const StandardKeypad = ({
  onDigit,
  onOperator,
  onEquals,
  onClear,
  onBackspace,
  onNegate,
  onPercent,
  onMemory,
  soundEnabled,
}) => {
  const handleBtn = (type, fn, val) => {
    playSound(type, soundEnabled);
    fn(val);
  };

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full">
      {/* Memory Row */}
      <button
        onClick={() => handleBtn('mode', onMemory, 'MC')}
        className="calc-btn py-2 text-xs bg-[var(--btn-func-bg)] text-[var(--btn-func-text)] hover:bg-[var(--btn-func-hover)] font-semibold"
      >
        MC
      </button>
      <button
        onClick={() => handleBtn('mode', onMemory, 'MR')}
        className="calc-btn py-2 text-xs bg-[var(--btn-func-bg)] text-[var(--btn-func-text)] hover:bg-[var(--btn-func-hover)] font-semibold"
      >
        MR
      </button>
      <button
        onClick={() => handleBtn('mode', onMemory, 'M+')}
        className="calc-btn py-2 text-xs bg-[var(--btn-func-bg)] text-[var(--btn-func-text)] hover:bg-[var(--btn-func-hover)] font-semibold"
      >
        M+
      </button>
      <button
        onClick={() => handleBtn('mode', onMemory, 'M-')}
        className="calc-btn py-2 text-xs bg-[var(--btn-func-bg)] text-[var(--btn-func-text)] hover:bg-[var(--btn-func-hover)] font-semibold"
      >
        M-
      </button>

      {/* Row 2: AC, Delete, %, Divide */}
      <button
        onClick={() => handleBtn('clear', onClear)}
        className="calc-btn py-3 sm:py-3.5 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25 border-rose-500/30 font-bold"
      >
        AC
      </button>
      <button
        onClick={() => handleBtn('digit', onBackspace)}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-func-bg)] text-[var(--btn-func-text)] hover:bg-[var(--btn-func-hover)]"
      >
        <Delete className="w-4 h-4" />
      </button>
      <button
        onClick={() => handleBtn('operator', onPercent)}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-func-bg)] text-[var(--btn-func-text)] hover:bg-[var(--btn-func-hover)] font-bold text-sm"
      >
        %
      </button>
      <button
        onClick={() => handleBtn('operator', onOperator, '÷')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-op-bg)] text-[var(--btn-op-text)] hover:bg-[var(--btn-op-hover)] font-bold"
      >
        <Divide className="w-5 h-5" />
      </button>

      {/* Row 3: 7, 8, 9, Multiply */}
      <button
        onClick={() => handleBtn('digit', onDigit, '7')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        7
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '8')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        8
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '9')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        9
      </button>
      <button
        onClick={() => handleBtn('operator', onOperator, '×')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-op-bg)] text-[var(--btn-op-text)] hover:bg-[var(--btn-op-hover)] font-bold"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Row 4: 4, 5, 6, Minus */}
      <button
        onClick={() => handleBtn('digit', onDigit, '4')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        4
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '5')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        5
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '6')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        6
      </button>
      <button
        onClick={() => handleBtn('operator', onOperator, '-')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-op-bg)] text-[var(--btn-op-text)] hover:bg-[var(--btn-op-hover)] font-bold"
      >
        <Minus className="w-5 h-5" />
      </button>

      {/* Row 5: 1, 2, 3, Plus */}
      <button
        onClick={() => handleBtn('digit', onDigit, '1')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        1
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '2')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        2
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '3')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        3
      </button>
      <button
        onClick={() => handleBtn('operator', onOperator, '+')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-op-bg)] text-[var(--btn-op-text)] hover:bg-[var(--btn-op-hover)] font-bold"
      >
        <Plus className="w-5 h-5" />
      </button>

      {/* Row 6: ±, 0, ., Equals */}
      <button
        onClick={() => handleBtn('digit', onNegate)}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-bold text-base"
      >
        ±
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '0')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-semibold"
      >
        0
      </button>
      <button
        onClick={() => handleBtn('digit', onDigit, '.')}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-num-bg)] text-[var(--btn-num-text)] hover:bg-[var(--btn-num-hover)] font-bold"
      >
        .
      </button>
      <button
        onClick={() => handleBtn('equals', onEquals)}
        className="calc-btn py-3 sm:py-3.5 bg-[var(--btn-eq-bg)] text-[var(--btn-eq-text)] hover:bg-[var(--btn-eq-hover)] font-bold shadow-lg"
      >
        <Equal className="w-5 h-5" />
      </button>
    </div>
  );
};
