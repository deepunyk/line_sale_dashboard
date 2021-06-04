import styled from 'styled-components';

export const Image = styled.img`
    height: 80%;    
    margin-right: ${(props)=>props.isRegister?'60px':'120px'};
    transition: margin 1s;
    @media only screen and (max-width: 600px) {
      display: none;

    }
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
    @media only screen and (max-width: 600px) {
        height: calc(100vh - 215px);    
        width: 100%;
    }
    
`;