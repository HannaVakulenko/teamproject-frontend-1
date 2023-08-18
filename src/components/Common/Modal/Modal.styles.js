import styled from 'styled-components';


export const Overlay = styled.div`
position: fixed;
top:0;
left:0;
width: 100vw;
height: 100vh;
background-color: rgba(62, 133, 243, 0.05);
z-index: 100;
`;


export const ModalDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;