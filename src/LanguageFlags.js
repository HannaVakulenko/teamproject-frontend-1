import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { Flags } from './components/MainLayout/Header/Header.styled';

import { ReactComponent as EnIcon } from './assets/images/flags/1x1/gb.svg';
import { ReactComponent as DeIcon } from './assets/images/flags/1x1/de.svg';
import { ReactComponent as UaIcon } from './assets/images/flags/1x1/ua.svg';
import { useLocation } from 'react-router-dom';

export default function LanguageFlags() {
  const { t } = useTranslation();
  const location = useLocation();

  let type = 'mainpage';
  if (
    location.pathname.startsWith('/statistics') ||
    location.pathname.startsWith('/calendar') ||
    location.pathname.startsWith('/account')
  ) {
    type = 'user';
  }

  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
      lang: 'English',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'Українська',
      lang: 'Українська',
    },
    {
      code: 'de',
      country_code: 'de',
      name: 'Deutsch',
      lang: 'Deutsch',
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLangIcon = lang => {
    switch (lang) {
      case 'ua':
        return <UaIcon width="30" height="22.5" />;
      case 'de':
        return <DeIcon width="30" height="22.5" />;
      case 'gb':
        return <EnIcon width="30" height="22.5" />;
      default:
        return <EnIcon width="30" height="22.5" />;
    }
  };

  return (
    <Flags $type={type}>
      <Tooltip title={t('language')} arrow>
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <LanguageIcon style={{ width: '32px', height: '32px' }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        disableScrollLock={true}
      >
        {languages.map(({ code, name, country_code, lang }) => (
          <Tooltip key={code} title={name} arrow placement="left">
            <MenuItem
              key={code}
            >
              <IconButton
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
                style={{
                  width: '3rem',
                  height: '2rem',
                }}
              >
                {handleLangIcon(country_code)}
              </IconButton>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </Flags>
  );
}
