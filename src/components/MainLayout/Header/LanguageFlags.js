import React from 'react';
// import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import cookies from 'js-cookie';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import classNames from 'classnames';
import { Flags } from './Header.styled';

export default function LanguageFlags() {
  const languages = [
    {
      id: 'en',
      country_code: 'gb',
      name: 'English',
    },
    {
      id: 'ua',
      country_code: 'ua',
      name: 'Українська',
    },
    {
      id: 'de',
      country_code: 'de',
      name: 'Deutsch',
    },
  ];

  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Flags>
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            bgcolor: '#F8F8F8',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#F8F8F8',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        {languages.map(({ id, name, country_code }) => (
          // <li key={id} title={name} arrow placement="left">
          //   <button>
          //     <div
          //       // className={`flag-icon flag-icon-${country_code}`}
          //       style={{
          //         opacity: currentLanguageCode === id ? 1 : 0.3,
          //         width: '1rem',
          //         height: '.5rem',
          //       }}
          //     ></div>
          //   </button>
          // </li>
          <Tooltip key={id} title={name} arrow placement="left">
            <MenuItem
              key={id}
              style={{
                backgroundColor:
                  currentLanguageCode === id ? '#D8D8D8' : '#F8F8F8',
                border:
                  currentLanguageCode === id ? '1px solid #989898' : '#F8F8F8',
              }}
            >
              <IconButton
                // className={classNames('dropdown-item')}
                onClick={() => {
                  i18next.changeLanguage(id);
                }}
              >
                <div
                  className={`flag-icon flag-icon-${country_code}`}
                  style={{
                    opacity: currentLanguageCode === id ? 1 : 0.3,
                    width: '1rem',
                    height: '.5rem',
                  }}
                ></div>
              </IconButton>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </Flags>
  );
}
