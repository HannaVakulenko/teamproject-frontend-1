import styled from 'styled-components';
import { device } from 'constants';

export const Sidebar = styled.div`
  background-color: orangered;
  padding: 30px;
  min-height: 100vh;
  transform: ${props =>
    props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  z-index: 2;

  @media (min-width: ${device.desktop}px) {
    position: static;
    transform: translateX(0);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${props => (props.$isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-out;
  pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')};

  @media (min-width: ${device.desktop}px) {
    opacity: 0;
    pointer-events: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;

  @media (min-width: ${device.desktop}px) {
    display: none;
  }
`;
