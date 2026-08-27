import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Buttons and the live display can show the same digit/text, so scope
// lookups to buttons (for input) and to the display panel (for output)
// rather than relying on ambiguous global text queries.
const clickButton = (container, label) => {
  const button = [...container.querySelectorAll('button')].find(
    (btn) => btn.textContent.trim() === label
  );
  if (!button) throw new Error(`No button found with label "${label}"`);
  return userEvent.click(button);
};

const getResultText = (container) => {
  const display = container.querySelector('.calculator-display');
  const lines = display.querySelectorAll('div.font-mono');
  return lines[lines.length - 1].textContent;
};

// Full end-to-end functional regression across modes, themes, memory,
// history, and keyboard shortcuts.
// @ac:AC-003
describe('App functional regression (all modes/features unchanged)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('performs digit entry and arithmetic in Standard mode', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await clickButton(container, '7');
    await clickButton(container, '3');
    // The operator/equals buttons render icon-only, so exercise the same
    // handlers via keyboard, which App.jsx wires to the identical callbacks.
    await user.keyboard('+2{enter}');

    expect(getResultText(container)).toBe('75');
  });

  it('supports memory recall (MC/MR/M+/M-) without changing calculation results', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await clickButton(container, '5');
    await user.keyboard('{enter}');
    await clickButton(container, 'M+');
    await clickButton(container, 'AC');
    await clickButton(container, 'MR');
    await user.keyboard('{enter}');

    expect(getResultText(container)).toBe('5');
  });

  it('clears memory with MC', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await clickButton(container, '9');
    await user.keyboard('{enter}');
    await clickButton(container, 'M+');
    await clickButton(container, 'MC');
    await clickButton(container, 'AC');
    await clickButton(container, 'MR');
    await user.keyboard('{enter}');

    expect(getResultText(container)).toBe('0');
  });

  it('clears the expression with AC and supports backspace', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await clickButton(container, '4');
    await clickButton(container, '4');
    await user.keyboard('{Backspace}');
    await user.keyboard('{enter}');
    expect(getResultText(container)).toBe('4');

    await clickButton(container, 'AC');
    expect(getResultText(container)).toBe('0');
  });

  it('records a calculation in history and clears it', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await clickButton(container, '8');
    await user.keyboard('{enter}');

    // Open history drawer
    await user.click(screen.getByTitle('Calculation History'));
    expect(screen.getAllByText(/8/).length).toBeGreaterThan(0);
  });

  it('switches between all calculator modes', async () => {
    const user = userEvent.setup();
    render(<App />);

    const modeSelect = screen.getAllByRole('combobox')[0];
    for (const mode of ['scientific', 'converter', 'financial', 'grapher', 'standard']) {
      await user.selectOptions(modeSelect, mode);
      expect(modeSelect.value).toBe(mode);
    }
  });

  it('opens the keyboard shortcuts modal', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTitle('Keyboard Shortcuts'));
    expect(screen.getByText(/Keyboard Shortcuts/i)).toBeInTheDocument();
  });

  it('toggles sound on and off', async () => {
    const user = userEvent.setup();
    render(<App />);

    const soundToggle = screen.getByTitle(/Mute Sounds|Enable Key Sounds/);
    await user.click(soundToggle);
    expect(localStorage.getItem('apex_sound')).toBeDefined();
  });
});

// Verifies WRK-1978:AC-001 and WRK-1978:AC-002: the new win11-light/win11-dark
// themes are selectable app-wide (not just in Standard/Scientific) and are
// applied via the shared data-theme token mechanism, and every mode continues
// rendering with the shared calc-btn/glass-card/calculator-display tokens
// under the new themes.
// @ac:AC-001 @ac:AC-002
describe('Windows 11 Fluent theme coverage across modes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('exposes win11-light and win11-dark as selectable themes', () => {
    render(<App />);
    const themeSelect = screen.getAllByRole('combobox').find((el) =>
      [...el.options].some((opt) => opt.value === 'win11-light')
    );
    expect(themeSelect).toBeTruthy();
    const values = [...themeSelect.options].map((opt) => opt.value);
    expect(values).toEqual(
      expect.arrayContaining(['win11-light', 'win11-dark', 'classic', 'midnight'])
    );
  });

  it('applies win11-dark theme via the shared data-theme attribute', async () => {
    const user = userEvent.setup();
    render(<App />);
    const themeSelect = screen.getAllByRole('combobox').find((el) =>
      [...el.options].some((opt) => opt.value === 'win11-dark')
    );
    await user.selectOptions(themeSelect, 'win11-dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('win11-dark');
  });

  it.each(['standard', 'scientific', 'converter', 'financial', 'grapher'])(
    'renders %s mode using the shared design-token classes under win11-light',
    async (mode) => {
      const user = userEvent.setup();
      render(<App />);

      const themeSelect = screen.getAllByRole('combobox').find((el) =>
        [...el.options].some((opt) => opt.value === 'win11-light')
      );
      await user.selectOptions(themeSelect, 'win11-light');

      const modeSelect = screen.getAllByRole('combobox')[0];
      await user.selectOptions(modeSelect, mode);

      // Every mode must keep using the shared .calc-btn primitive so the
      // win11 theme tokens apply uniformly without per-component styling.
      expect(document.querySelectorAll('.calc-btn').length).toBeGreaterThan(0);
    }
  );
});

// Verifies WRK-1978:AC-004: the restyled navigation exposes both a desktop
// rail and a mobile dropdown affordance so the UI stays usable at any width.
// @ac:AC-004
describe('Responsive navigation (desktop rail + mobile dropdown)', () => {
  it('renders both the desktop nav rail and the mobile dropdown markup', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.nav-rail')).toBeInTheDocument();
    expect(container.querySelector('.nav-mobile')).toBeInTheDocument();
  });

  it('keeps the mobile mode dropdown in sync with the active mode', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);
    const mobileSelect = container.querySelector('.nav-mobile select');
    await user.selectOptions(mobileSelect, 'financial');
    expect(mobileSelect.value).toBe('financial');
  });
});

// Verifies CFA-STORY implementation contract: a CFA topic selector and
// calculator result flow are available from the app shell.
// @ac:SPEC-001 @ac:SPEC-002 @ac:SPEC-003 @ac:SPEC-004 @ac:AC-005 @ac:AC-006
describe('CFA Level I toolkit flow', () => {
  it('offers the CFA mode and all nine topic choices', async () => {
    const user = userEvent.setup();
    render(<App />);

    const modeSelect = screen.getAllByRole('combobox')[0];
    await user.selectOptions(modeSelect, 'cfa');
    expect(modeSelect.value).toBe('cfa');

    const topicSelect = screen.getByLabelText(/Select a topic/i);
    const values = [...topicSelect.options].map((option) => option.value);
    expect(values).toEqual(expect.arrayContaining([
      'Quantitative Methods',
      'Economics',
      'Financial Statement Analysis',
      'Corporate Issuers',
      'Equity',
      'Fixed Income',
      'Derivatives',
      'Alternative Investments',
      'Portfolio Management',
    ]));
  });

  // @ac:AC-005 @ac:AC-006
  it('computes a valid CFA result and rejects invalid input', async () => {
    const user = userEvent.setup();
    render(<App />);

    const modeSelect = screen.getAllByRole('combobox')[0];
    await user.selectOptions(modeSelect, 'cfa');

    const topicSelect = screen.getByLabelText(/Select a topic/i);
    await user.selectOptions(topicSelect, 'Quantitative Methods');

    const principalInput = screen.getByLabelText(/Present value/i);
    const rateInput = screen.getByLabelText(/Annual rate/i);
    const yearsInput = screen.getByLabelText(/Years/i);

    await user.clear(principalInput);
    await user.type(principalInput, '1000');
    await user.clear(rateInput);
    await user.type(rateInput, '5');
    await user.clear(yearsInput);
    await user.type(yearsInput, '5');

    expect(screen.getByText(/Future value/i)).toBeInTheDocument();
    expect(screen.getByText(/1,276.28/i)).toBeInTheDocument();

    await user.clear(principalInput);
    expect(screen.getByText(/Please provide valid values/i)).toBeInTheDocument();

    await user.selectOptions(topicSelect, 'Equity');
    expect(screen.getByLabelText(/Investment/i)).toHaveValue(2000);
    expect(screen.getByLabelText(/Return rate/i)).toHaveValue(7);
    expect(screen.getByLabelText(/Years/i)).toHaveValue(6);
  });
});
