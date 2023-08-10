import styled from 'styled-components';

export const ListDescription = styled.ul``;

export const ItemDescription = styled.li``;

export const WrappInfo = styled.div``;

export const Number = styled.p`
margin-bottom: 14px;
  color: ${p => p.theme.colors.blue1Color};
  font-size: 80px;
  font-weight: 700;
  line-height: 100%; /* 80px */
  letter-spacing: -4px;
`;
export const TitleDescription = styled.h2`
  width: 214px;
  margin-bottom: 8px;
  padding: 6px 18px;
  color: ${p => p.theme.colors.blue1Color};
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
  background: ${p => p.theme.colors.blue2Color};
`;

export const AfterTitleDescription = styled.p`
  color: #171820;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
`;

export const TextDescription = styled.p`
  margin-top: 14px;
  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const ImgDescription = styled.img`
margin-top: 40px;
`;
