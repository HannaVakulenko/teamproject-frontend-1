import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectTheme } from 'redux/themeSlice';
import icon from 'assets/icons/symbol-defs.svg';
import { ThemeToggleBtn } from './ThemeToggler.styled';

function ThemeToggler() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const switchTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleBtn onClick={switchTheme}>
      <svg width="32" height="32">
        <use
          href={icon + (theme === 'light' ? '#icon-moon' : '#icon-sun')}
        ></use>
      </svg>
    </ThemeToggleBtn>
  );
}

export default ThemeToggler;
