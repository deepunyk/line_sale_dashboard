import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;    
    overflow: auto;
`;

export const Image = styled.img`
    height: 80%;    
`;

export const SubWrapper = styled.div`
    height: calc(100vh - 155px);    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:start;
    background-color: white;
    z-index: -1;
`;