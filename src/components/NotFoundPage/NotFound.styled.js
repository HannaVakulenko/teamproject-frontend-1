import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
   display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center; 
  
 
`;
export const NotFoundTitle = styled.p`

  font-family: Inter;
  font-size: 100px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  color:  rgba(62, 133, 243, 1);
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const NotFoundText = styled.p`
  width: 285px;
  margin-top: 24px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(17, 17, 17, 0.7);
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  min-width: 153px;
  height: 46px;
  margin-top: 24px;
  padding: 14px 32px 14px 32px;

  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.02em;
  cursor: pointer;

  border: none;
  border-radius: 16px;
  background-color: rgba(62, 133, 243, 1);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgba(43, 120, 239, 1);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const NotFoundImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transform: 'rotate(31deg)';
`;