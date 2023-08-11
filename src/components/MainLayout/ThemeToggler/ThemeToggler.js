import { useState, useEffect } from 'react';
import { ReactComponent as Icons } from '../../../assets/icons/symbol-defs.svg';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button type="button" onClick={toggleTheme}>
      <svg width="24" height="24">
        <use href={Icons + (theme === 'light' ? '#icon-sun' : '#icon-moon')} />
        {/* <use href={`#${theme === 'light' ? 'icon-sun' : 'icon-moon'}`} /> */}
      </svg>
    </button>
  );
};
export default ThemeToggler;
