import icon from 'assets/icons/symbol-defs.svg';
import { ThemeToggleBtn } from './ThemeToggler.styled';

const ThemeToggler = () => {
  return (
    <ThemeToggleBtn type="button">
      <svg>
        <use href={icon + '#icon-moon'}></use>
      </svg>
    </ThemeToggleBtn>
  );
};
export default ThemeToggler;
