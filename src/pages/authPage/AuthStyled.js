import styled from 'styled-components';

export const Image = styled.img`
    height: 80%;    
    margin-right: ${(props)=>props.isRegister||'16vw'}
`;

export const Wrapper = styled.div`
    height: calc(100vh - 155px);    
    padding: 0 8vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: -1;
`;