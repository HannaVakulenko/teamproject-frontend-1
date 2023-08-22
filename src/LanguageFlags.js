import React from 'react';
import cookies from 'js-cookie';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import classNames from 'classnames';
import { Flags } from './components/MainLayout/Header/Header.styled';

import { ReactComponent as EnIcon } from './assets/images/flags/1x1/gb.svg';
import { ReactComponent as DeIcon } from './assets/images/flags/1x1/de.svg';
import { ReactComponent as UaIcon } from './assets/images/flags/1x1/ua.svg';
import { useLocation } from 'react-router-dom';

export default function LanguageFlags() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
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
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'Українська',
    },
    {
      code: 'de',
      country_code: 'de',
      name: 'Deutsch',
    },
  ];

  let otherLanguages = languages.filter(lang => lang.code !== currentLanguage);

  const currentLanguageCode = cookies.get('i18next') || 'en';

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
        // PaperProps={{
        //   elevation: 0,
        //   sx: {
        //     overflow: 'visible',
        //     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        //     mt: 1.5,
        //     bgcolor: '#F8F8F8',
        //     '& .MuiAvatar-root': {
        //       width: 32,
        //       height: 32,
        //       ml: -0.5,
        //       mr: 1,
        //     },
        //     '&:before': {
        //       content: '""',
        //       display: 'block',
        //       position: 'absolute',
        //       top: 0,
        //       right: 14,
        //       width: 10,
        //       height: 10,
        //       bgcolor: '#F8F8F8',
        //       transform: 'translateY(-50%) rotate(45deg)',
        //       zIndex: 0,
        //     },
        //   },
        // }}
      >
        {languages.map(({ code, name, country_code, lang }) => (
          <Tooltip key={code} title={name} arrow placement="left">
            <MenuItem
              key={code}
              // style={{
              //   backgroundColor:
              //     currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',
              //   border:
              //     currentLanguageCode === lang
              //       ? '1px solid #989898'
              //       : '#F8F8F8',
              // }}
            >
              <IconButton
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
                style={{
                  //   opacity: currentLanguageCode === code ? 1 : 0.3,
                  width: '3rem',
                  height: '2rem',
                }}
              >
                {handleLangIcon(code)}
              </IconButton>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </Flags>
  );
}
