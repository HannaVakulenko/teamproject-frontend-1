import React from 'react';
import { Item, List, Wrapper } from './DayCalendarHead.styled';

const DayCalendarHead = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <span>MON</span>
          <span>1</span>
        </Item>
        <Item>
          <span>TUE</span>
          <span>2</span>
        </Item>
        <Item>
          <span>WED</span>
          <span>3</span>
        </Item>
        <Item>
          <span>THU</span>
          <span>4</span>
        </Item>
        <Item>
          <span>FRI</span>
          <span>5</span>
        </Item>
        <Item>
          <span>SAT</span>
          <span>6</span>
        </Item>
        <Item>
          <span>SUN</span>
          <span>7</span>
        </Item>
      </List>
    </Wrapper>
  );
};

export default DayCalendarHead;
