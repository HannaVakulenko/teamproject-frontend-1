import icon from 'assets/icons/symbol-defs.svg';
import {
  Wrapper,
  Button,
  Icon,
  WrapperMenu,
  ButtonMenu,
} from './TaskToolbar.styled';
import { Popover } from '@mui/material';
import { useState } from 'react';

const TaskToolbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Wrapper>
      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          <Icon width="14" height="14">
            <use href={icon + '#icon-arrow-circle-broken-right'}></use>
          </Icon>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <WrapperMenu>
            <ButtonMenu onClick={handleClose}>
              In progress
              <Icon width="14" height="14">
                <use href={icon + '#icon-arrow-circle-broken-right'}></use>
              </Icon>
            </ButtonMenu>
            <ButtonMenu onClick={handleClose}>
              Done
              <Icon width="14" height="14">
                <use href={icon + '#icon-arrow-circle-broken-right'}></use>
              </Icon>
            </ButtonMenu>
          </WrapperMenu>
        </Popover>
      </div>

      <Button>
        <Icon width="14" height="14">
          <use href={icon + '#icon-pencil-01'}></use>
        </Icon>
      </Button>
      <Button>
        <Icon width="14" height="14">
          <use href={icon + '#icon-trash-04'}></use>
        </Icon>
      </Button>
      {/* <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        
      </Popover>
    </div> */}
    </Wrapper>
  );
};
export default TaskToolbar;
