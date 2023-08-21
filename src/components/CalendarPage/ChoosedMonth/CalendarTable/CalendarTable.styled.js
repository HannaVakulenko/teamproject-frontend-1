import { styled } from 'styled-components';
export const Container = styled.div`
  @media (max-width: 375px) {
    display: flex;
    width: 335px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    display: flex;
    width: 704px;
    height: 720px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    display: flex;
  }

  @media (min-width: 1441px) {
    display: flex;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  background-color: white;
  width: 335px;
  height: 470px;

  @media (max-width: 375px) {
    // grid-template-columns: repeat(7, 1fr);
    border-radius: 8px;
    background-color: white;
    width: 335px;
    height: 470px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    border-radius: 8px;
    background-color: white;
    width: 704px;
    height: 720px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    grid-template-columns: repeat(7, 156px);
    background-color: white;
    width: 1087px;
    height: 625px;
  }

  @media (min-width: 1441px) {
    border: 1px solid rgba(220, 227, 229, 0.5);
    background-color: white;
    // width: 100%;
    // height: auto;
    // height: 934px;
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
  min-width: 47.85px;
  //  width: calc(47px + 1px);
  @media (max-width: 375px) {
    background-color: white;
    // width: calc(46px + 2px);
    min-width: 47.85px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    background-color: white;
    // width: calc(70px + 4px);
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    background-color: white;
    // width: calc(139px + 8px);
    // width: 156px;
  }
  @media (min-width: 1441px) {
    background-color: white;
    // width: calc(139px + 8px);
  }
`;

const commonDayStyles = `
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: 0em;
  text-align: right;
  padding: 4px 6px;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 14px;
  margin-top: 14px;
`;

export const DayWrapper = styled.div`
  font-size: 12px;
  color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
  background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
  border-radius: ${props => (props.$today ? '8px' : '0')};

  ${commonDayStyles}

  @media (max-width: 375px) {
    font-size: 12px;
    margin-right: 4px;
    margin-top: 8px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 16px;
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: 16px;
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }

  @media (min-width: 1441px) {
    font-size: 18px;
    border-radius: ${props => (props.$today ? '8px' : '0')};
  }
`;
const commonStyles = `
  border-radius: 8px;
  font-weight: 700;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px;
`;

const taskMediaStyles = (fontSize, width, height) => `
  @media (min-width: 376px) and (max-width: 768px) {
    font-size: ${fontSize}px;
    line-height: 1.25;
    width: ${width}px;
    height: ${height}px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    font-size: ${fontSize}px;
    line-height: 1.25;
    width: 139px; 
    height: ${height + 4}px; 
  }

  @media (min-width: 1441px) {
    font-size: ${fontSize + 2}px; 
    line-height: 1.25;
    width: 146px; 
    height: ${height + 4}px; 
  }
`;

export const LowPriorityTask = styled.div`
  color: #3e85f3;
  background: #ceeefd;
  font-size: 10px;
  width: 44px;
  height: 22px;
  ${commonStyles}
  ${taskMediaStyles(14, 70, 22)}
`;

export const MediumPriorityTask = styled.div`
  color: #f3b249;
  background: #fcf0d4;
  font-size: 10px;
  width: 44px;
  height: 22px;
  ${commonStyles}
  ${taskMediaStyles(14, 70, 22)}
`;

export const HighPriorityTask = styled.div`
  color: #ea3d65;
  background: #ffd2dd;
  font-size: 10px;
  width: 44px;
  height: 22px;
  ${commonStyles}
  ${taskMediaStyles(14, 70, 22)}
`;
// ***********************************екекекеекекенунпвампцуравис
// const taskMediaStyles = (fontSize, width, height) => `
//   @media (min-width: 376px) and (max-width: 768px) {
//     font-size: ${fontSize}px;
//     line-height: 1.25;
//     width: ${width}px;
//     height: ${height}px;
//   }

//   @media (min-width: 769px) and (max-width: 1440px) {
//     font-size: ${fontSize}px;
//     line-height: 1.25;
//     width: ${width}px;
//     height: ${height + 4}px; /* Збільшити висоту на 4px */
//   }

//   @media (min-width: 1441px) {
//     font-size: ${fontSize + 2}px; /* Збільшити розмір шрифта на 2px */
//     line-height: 1.25;
//     width: ${width}px;
//     height: ${height + 4}px; /* Збільшити висоту на 4px */
//   }
// `;

// export const CellWrapper = styled.div`
//   border: 1px solid rgba(220, 227, 229, 0.5);
//   padding: 8px 4px;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   justify-content: center;
//   align-items: center;
//   width: 47px;

//   @media (max-width: 375px) {
//     display: flex;
//     flex-direction: column;
//     padding: 14px;
//     position: relative;
//     justify-content: center;
//     align-items: center;
//     padding: 8px 4px;
//     width: 47px;
//   }
//   @media (min-width: 376px) and (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     padding: 14px;
//     position: relative;
//     justify-content: center;
//     align-items: center;
//   }

//   @media (min-width: 769px) and (max-width: 1440px) {
//     // padding: 14px;
//     display: flex;
//     flex-direction: column;
//     padding: 14px;
//     position: relative;
//     justify-content: center;
//     align-items: center;
//   }
// `;
// export const DayWrapper = styled.div`
//   font-size: 12px;
//   font-weight: 700;
//   line-height: 116.667%;
//   letter-spacing: 0em;
//   text-align: right;
//   padding: 4px 6px;
//   position: absolute;
//   top: 0;
//   right: 0;

//   color: ${props => (props.$today ? '#FFFFFF' : '#343434')};
//   background-color: ${props => (props.$today ? '#3E85F3' : 'transparent')};
//   border-radius: ${props => (props.$today ? '6px' : '0')};

//   @media (max-width: 375px) {
//     font-size: 12px;
//     font-weight: 700;
//     line-height: 116.667%;
//     letter-spacing: 0em;
//     text-align: right;
//     padding: 4px 6px;
//     position: absolute;
//     top: 0;
//     right: 0;
//     margin-right: 4px;
//     margin-top: 8px;
//   }

//   @media (min-width: 376px) and (max-width: 768px) {
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 1.25;
//     letter-spacing: 0em;
//     text-align: right;
//     padding: 4px 6px;
//     position: absolute;
//     top: 0;
//     right: 0;
//     margin-right: 14px;
//     margin-top: 14px;
//     border-radius: ${props => (props.$today ? '8px' : '0')};
//   }

//   @media (min-width: 769px) and (max-width: 1440px) {
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 1.25;
//     letter-spacing: 0em;
//     text-align: right;
//     padding: 4px 6px;
//     position: absolute;
//     top: 0;
//     right: 0;
//     margin-right: 14px;
//     margin-top: 14px;
//     border-radius: ${props => (props.$today ? '8px' : '0')};
//   }

//   @media (min-width: 1441px) {
//     font-size: 18px;
//     font-weight: 700;
//     line-height: 1.25;
//     letter-spacing: 0em;
//     text-align: right;
//     padding: 4px 6px;
//     position: absolute;
//     top: 0;
//     right: 0;
//     margin-right: 14px;
//     margin-top: 14px;
//     border-radius: ${props => (props.$today ? '8px' : '0')};
//   }
// `;

export const TaskContainer = styled.div``;

// export const LowPriorityTask = styled.div`
//   color: #3e85f3;
//   background: #ceeefd;
//   border-radius: 8px;
//   font-size: 10px;
//   font-weight: 700;
//   line-height: 1.4;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   width: 44px;
//   height: 22px;
//   padding: 4px;

//   @media (max-width: 375px) {
//     color: #3e85f3;
//     background: #ceeefd;
//     border-radius: 8px;
//     font-size: 10px;
//     font-weight: 700;
//     line-height: 1.4;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     width: 44px;
//     height: 22px;
//     padding: 4px;
//   }

//   @media (min-width: 376px) and (max-width: 768px) {
//     color: #3e85f3;
//     background: #ceeefd;
//     border-radius: 8px;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 70px;
//     height: 22px;
//   }

//   @media (min-width: 769px) and (max-width: 1440px) {
//     color: #3e85f3;
//     background: #ceeefd;
//     border-radius: 8px;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 139px;
//     height: 26px;
//   }

//   @media (min-width: 1441px) {
//     color: #3e85f3;
//     background: #ceeefd;
//     border-radius: 8px;
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 139px;
//     height: 26px;
//   }
// `;
// export const MediumPriorityTask = styled.div`
//   color: #f3b249;
//   background: #fcf0d4;
//   border-radius: 8px;
//   font-size: 10px;
//   font-weight: 700;
//   line-height: 1.4;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   width: 44px;
//   height: 22px;
//   padding: 4px;

//   @media (max-width: 375px) {
//     color: #f3b249;
//     background: #fcf0d4;
//     border-radius: 8px;
//     font-size: 10px;
//     font-weight: 700;
//     line-height: 1.4;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     width: 44px;
//     height: 22px;
//     padding: 4px;
//   }

//   @media (min-width: 376px) and (max-width: 768px) {
//     color: #f3b249;
//     background: #fcf0d4;
//     border-radius: 8px;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 70px;
//     height: 22px;
//   }

//   @media (min-width: 769px) and (max-width: 1440px) {
//     color: #f3b249;
//     background: #fcf0d4;
//     border-radius: 8px;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 139px;
//     height: 26px;
//   }

//   @media (min-width: 1441px) {
//     color: #f3b249;
//     background: #fcf0d4;
//     border-radius: 8px;
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 139px;
//     height: 26px;
//   }
// `;

// export const HighPriorityTask = styled.div`
//   color: #ea3d65;
//   background: #ffd2dd;
//   border-radius: 8px;
//   font-size: 10px;
//   font-weight: 700;
//   line-height: 1.4;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   width: 44px;
//   height: 22px;
//   padding: 4px;

//   @media (max-width: 375px) {
//     color: #ea3d65;
//     background: #ffd2dd;
//     border-radius: 8px;
//     font-size: 10px;
//     font-weight: 700;
//     line-height: 1.4;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     width: 44px;
//     height: 22px;
//     padding: 4px;
//   }

//   @media (min-width: 376px) and (max-width: 768px) {
//     color: #ea3d65;
//     background: #ffd2dd;
//     border-radius: 8px;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 70px;
//     height: 22px;
//   }

//   @media (min-width: 769px) and (max-width: 1440px) {
//     color: #ea3d65;
//     background: #ffd2dd;
//     border-radius: 8px;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 139px;
//     height: 26px;
//   }

//   @media (min-width: 1441px) {
//     color: #ea3d65;
//     background: #ffd2dd;
//     border-radius: 8px;
//     font-size: 16px;
//     font-weight: 700;
//     line-height: 1.25;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     padding: 4px;
//     width: 139px;
//     height: 26px;
//   }
// `;
