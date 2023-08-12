import { styled } from "styled-components";
import { device } from "constants";
import gooseImage1x from "assets/images/registerform-desk-1x.webp";
import gooseImage2x from "assets/images/registerform-desk@2x.webp";
import gooseImage3x from "assets/images/registerform-desk@3x.webp";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${p => p.theme.colors.blue2Color};

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
    background-image: url(${gooseImage1x});

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${gooseImage2x});
      background-size: contain;
    };

    @media (min-device-pixel-ratio: 3), (min-resolution: 300dpi), (min-resolution: 3dppx) {
      background-image: url(${gooseImage3x});
      background-size: contain;
    };
  };
`;