import styled from 'styled-components';
import { device } from 'constants';

export const StyledFeedbackBtn = styled.button`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  border: none;

  border-radius: 10px;
  background: ${p => p.theme.mainAccentColor};

  @media (min-width: ${device.tablet}px) {
    padding: 12px 32px;
    border-radius: 14px;
  }
`;

export const FeedBackBtnText = styled.span`
  color: ${p => p.theme.buttonTextColor};
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 133.333%;

  @media (min-width: ${device.tablet}px) {
    font-size: 14px;
    line-height: 128.571%;
  }
`;
