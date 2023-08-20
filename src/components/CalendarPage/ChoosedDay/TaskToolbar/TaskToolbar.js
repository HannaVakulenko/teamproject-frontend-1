import icon from 'assets/icons/symbol-defs.svg';
import {
  Wrapper,
  Button,
  Icon,
  WrapperMenu,
  ButtonMenu,
  WrapperPopover,
} from './TaskToolbar.styled';
import { Popover } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesArray } from 'constants';
import { updateTask } from 'redux/tasks/operations';

const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();

  const availableCategories = categoriesArray.filter(
    category => category !== task.category
  );

  const replaceTask = newCategory => {
    dispatch(
      updateTask({
        _id: task._id,
        title: task.title,
        priority: task.priority,
        category: newCategory,
        start: task.start,
        end: task.end,
        date: task.date,
      })
    );
    handleClose();
  };

  // ---popover---
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // ---popover---

  return (
    <Wrapper>
      <WrapperPopover>
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
            <ButtonMenu onClick={() => replaceTask(availableCategories[0])}>
              {availableCategories[0].split('-').join(' ')[0].toUpperCase() +
                availableCategories[0].split('-').join(' ').slice(1)}
              <Icon width="14" height="14">
                <use href={icon + '#icon-arrow-circle-broken-right'}></use>
              </Icon>
            </ButtonMenu>
            <ButtonMenu onClick={() => replaceTask(availableCategories[1])}>
              {availableCategories[1].split('-').join(' ')[0].toUpperCase() +
                availableCategories[1].split('-').join(' ').slice(1)}
              <Icon width="14" height="14">
                <use href={icon + '#icon-arrow-circle-broken-right'}></use>
              </Icon>
            </ButtonMenu>
          </WrapperMenu>
        </Popover>
      </WrapperPopover>

      <Button>
        <Icon width="14" height="14">
          <use href={icon + '#icon-pencil-01'}></use>
        </Icon>
      </Button>
      <Button
        onClick={() => {
          console.log(task._id);
          dispatch(deleteTask(task._id));
        }}
      >
        <Icon width="14" height="14">
          <use href={icon + '#icon-trash-04'}></use>
        </Icon>
      </Button>
    </Wrapper>
  );
};
export default TaskToolbar;
