import { styled } from 'styled-components';
import { device } from 'constants';

import { registerform } from 'assets/images/registerform';

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
    left: 50px;
    bottom: 0;
    display: block;
    width: 400px;
    height: 416px;
    background-image: url(${registerform.desk1xPng});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${registerform.desk2xPng});
      background-size: contain;
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 300dpi),
      (min-resolution: 3dppx) {
      background-image: url(${registerform.desk3xPng});
      background-size: contain;
    }

    @supports (
      background-image: -webkit-image-set(url(${registerform.desk1xWebp}))
    ) {
      background-image: -webkit-image-set(
        url(${registerform.desk1xWebp}) 1x,
        url(${registerform.desk2xWebp}) 2x,
        url(${registerform.desk3xWebp}) 3x
      );
      background-image: image-set(
        url(${registerform.desk1xWebp}) 1x,
        url(${registerform.desk2xWebp}) 2x,
        url(${registerform.desk3xWebp}) 3x
      );
    }
  }
`;
