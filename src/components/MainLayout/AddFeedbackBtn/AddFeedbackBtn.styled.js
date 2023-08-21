import styled from 'styled-components';
import { device } from 'constants';

export const StyledFeedbackBtn = styled.button`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  border: none;

  border-radius: 10px;
  background: ${p => p.theme.mainAccentColor};

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #0f5dc8;
  }

  @media (min-width: ${device.tablet}px) {
    padding: 12px 32px;
    border-radius: 14px;
  }
`;

export const FeedBackBtnText = styled.span`
  color: ${p => p.theme.buttonTextColor};
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;

  @media (min-width: ${device.tablet}px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
