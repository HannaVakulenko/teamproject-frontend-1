import styled from 'styled-components';
import { device } from 'constants';

import { loginform } from 'assets/images/loginform';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${p => p.theme.secondaryAccentColor};

  @media screen and (min-width: ${device.desktop}px) {
    position: relative;
  }
`;

export const BgImage = styled.div`
  display: none;
  @media screen and (min-width: ${device.desktop}px) {
    position: absolute;
    right: 60px;
    bottom: 20px;
    display: block;
    width: 368px;
    height: 521px;
    background-image: url(${loginform.desk1xWebp});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${loginform.desk2xWebp});
      background-size: contain;
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 300dpi),
      (min-resolution: 3dppx) {
      background-image: url(${loginform.desk3xWebp});
      background-size: contain;
    }

    @supports (
      background-image: -webkit-image-set(url(${loginform.desk1xWebp}))
    ) {
      background-image: -webkit-image-set(
        url(${loginform.desk1xWebp}) 1x,
        url(${loginform.desk2xWebp}) 2x,
        url(${loginform.desk3xWebp}) 3x
      );
      background-image: image-set(
        url(${loginform.desk1xWebp}) 1x,
        url(${loginform.desk2xWebp}) 2x,
        url(${loginform.desk3xWebp}) 3x
      );
    }
  }
`;
