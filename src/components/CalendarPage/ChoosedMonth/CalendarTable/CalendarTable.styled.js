import { styled } from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  background-color: white;

  @media (max-width: 375px) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
    max-width: 335px;
    height: 470px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    max-width: 704px;
    height: 720px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    max-width: 1087px;
    height: 625px;
  }

  @media (min-width: 1441px) {
    width: 100%;
    // height: auto;?????
    height: 625px;
  }
`;

export const CellWrapper = styled.div`
  border: 1px solid rgba(220, 227, 229, 0.5);
  padding: 8px 4px;
  display: flex;
  flex-direction: column;

  position: relative;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    padding: 8px 4px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 4px;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    // padding: 14px;
  }
`;

export const DayWrapper = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: 0em;
  text-align: right;
  padding: 4px 6px;
  // display: inline-flex;
  // align-self: flex-end;
  position: absolute;
  top: 0;
  right: 0;

  color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
  background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
  border-radius: ${props => (props.$today ? '6px' : '0')};

  @media (max-width: 375px) {
    font-size: 12px;
    text-transform: uppercase;
    padding: 4px 6px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    padding: 4px 8px;
    font-size: 16px;
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 4px 8px;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }

  @media (min-width: 1441px) {
    padding: 4px 8px;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }
`;

export const TaskContainer = styled.div``;

export const LowPriorityTask = styled.div`
  color: #3e85f3;
  background: #ceeefd;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 44px;
  height: 22px;
  padding: 4px;

  @media (max-width: 375px) {
    color: #3e85f3;
    background: #ceeefd;
    border-radius: 8px;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 44px;
    height: 22px;
    padding: 4px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    color: #3e85f3;
    background: #ceeefd;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.25;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px;
    width: 70px;
    height: 22px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    color: #3e85f3;
    background: #ceeefd;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.25;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px;
    width: 139px;
    height: 26px;
  }

  @media (min-width: 1441px) {
    color: #3e85f3;
    background: #ceeefd;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px;
    width: 139px;
    height: 26px;
  }
`;

export const MediumPriorityTask = styled.div`
  color: #f3b249;
  background: #fcf0d4;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px;
  width: 44px;
  height: 22px;
  padding: 4px;
  // @media (max-width: 375px) {
  //   font-size: 10px;
  //   font-weight: 700;
  // }

  // @media (min-width: 376px) and (max-width: 768px) {
  //   font-size: 14px;
  //   line-height: 18px;
  // }

  // @media (min-width: 769px) and (max-width: 1440px) {
  //   font-size: 14px;
  //   line-height: 18px;
  // }

  // @media (min-width: 1441px) {
  //   font-size: 16px;
  //   line-height: 20px;
  // }
`;

export const HighPriorityTask = styled.div`
  color: #ea3d65;
  background: #ffd2dd;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px;
  width: 44px;
  height: 22px;
  padding: 4px;
  // @media (max-width: 375px) {
  //   font-size: 14px;
  //   line-height: 18px;
  // }

  // @media (min-width: 376px) and (max-width: 768px) {
  //   // font-size: 14px;
  //   // line-height: 18px;
  // }

  // @media (min-width: 769px) and (max-width: 1440px) {
  //   // font-size: 14px;
  //   // line-height: 18px;
  // }

  // @media (min-width: 1441px) {
  //   // font-size: 16px;
  //   // line-height: 20px;
  // }
`;
