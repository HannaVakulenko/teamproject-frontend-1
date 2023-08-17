import { styled } from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.div`
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 18px;
  padding-left: 14px;
  border-radius: 8px;
  background-color: ${p => p.theme.mainBGColor};
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;

  @media screen and (min-width: ${device.tablet}px) {
    margin-top: 32px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const AvatarImage = styled.img`
  border-radius: 32px;
  border: 1.8px solid ${p => p.theme.mainAccentColor};
`;

export const Badge = styled.span`
  padding: 4px 12px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  color:  ${p => p.theme.mainBGColor};
  border-radius: 4px;
  ${({ priority }) => {
    if (priority === 'low') {
      return 'background-color: #72C2F8;';
    } else if (priority === 'medium') {
      return 'background-color: #F3B249;';
    } else if (priority === 'high') {
      return 'background-color: #EA3D65;';
    }
  }}
`;