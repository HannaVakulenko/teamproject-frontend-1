// import { useState } from 'react';
// import { ReactComponent as Icons } from '../../../assets/icons/symbol-defs.svg';
// import { lightTheme, darkTheme } from '../../../styles/theme';

// const ThemeToggler = () => {
//   const [isLightkTheme, setIsLightTheme] = useState(false);

//   const toggleTheme = () => {
//     setIsLightTheme(prevIsLightTheme => !prevIsLightTheme);
//   };

//   return (
//     <button type="button" onClick={toggleTheme}>
//       <svg width="24" height="24">
//         <use
//           href={
//             Icons +
//             (isLightkTheme === 'lightTheme' ? '#icon-sun' : '#icon-moon')
//           }
//         />
//       </svg>
//     </button>
//   );
// };
// export default ThemeToggler;

import React from 'react';
import { ReactComponent as Icons } from '../../../assets/icons/symbol-defs.svg';

const ThemeToggler = ({ toggleTheme, isLightTheme }) => {
  return (
    <button type="button" onClick={toggleTheme}>
      <svg width="24" height="24">
        <use
          href={
            Icons + (isLightTheme ? '#icon-sun' : '#icon-moon') // Використання переданого стану
          }
        />
      </svg>
    </button>
  );
};

export default ThemeToggler;
