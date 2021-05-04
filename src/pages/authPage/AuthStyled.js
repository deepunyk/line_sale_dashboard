import styled from 'styled-components';
import color from '../../constants/color'

export const Image = styled.img`
    height: 80%;    
`;

export const Wrapper = styled.div`
    height: 85vh;    
    padding: 0 8vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    background: rgb(244,223,194);
    background: linear-gradient(0deg, rgba(244,223,194,1) 0%, rgba(252,244,232,1) 29%, rgba(255,255,255,1) 100%);
    z-index: -1;
`;