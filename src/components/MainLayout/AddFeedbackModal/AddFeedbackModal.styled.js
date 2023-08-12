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

export const TextReview = styled.label`
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17; /* 116.667% */
`;

export const InputFeedback = styled.textarea`
  margin-bottom: 14px;
  width: 295px;
  height: 130px;
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  resize: none;
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
`;
