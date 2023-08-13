import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  width: 335px;
  height: 331px;
  padding: 28px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #3e85f3;
  }
`;

export const WrapReview = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
`;

export const EditBtn = styled.button`
  margin-left: auto;
  margin-right: 8px;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #e3f3ff;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #3e85f3;

  &:hover,
  &:focus {
    background: #3e85f3;
    color: #ffffff;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #dcebf7;
  }
`;

export const Icon = styled.svg`
  stroke: currentColor;
  fill: none;
`;

export const WrapRating = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextReview = styled.p`
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17; /* 116.667% */
`;

export const InputFeedback = styled.textarea`
  margin-bottom: 14px;
  width: 100%;
  height: 130px;
  padding: 14px 18px;
  border-color: transparent;
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  resize: none;
  &:focus-visible,
  &::focus-within {
    background: #fff;
    border-color: #f6f6f6;
  }
`;

export const WrapControlBtn = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const SaveBtn = styled.button`
  width: 144px;
  height: 42px;
  /* margin-right: 7px; */
  border: none;
  border-radius: 8px;
  background: #3e85f3;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #0f5dc8;
  }
`;

export const CancelBtn = styled.button`
  width: 144px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background: #e5edfa;

  color: #343434;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #d6dde9;
  }
`;
