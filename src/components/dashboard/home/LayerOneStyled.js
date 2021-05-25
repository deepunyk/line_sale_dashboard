import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-area: ${props=>props.area};
    display: flex;
    flex-direction: column;
    justify-content: ${(props)=>props.isCenter ? 'center' :'space-evenly'};
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: ${(props)=>props.shadow && '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'};
    overflow-y: auto;
`;

export const Text = styled.div`
    color: ${(props)=>props.color??'black'};
    font-weight: ${(props)=>props.lightFont ?'300':'400'};
    font-size: ${(props)=>props.fontSize ??'1rem'};
    margin-bottom: ${(props)=>props.marginBottom};
    margin-top: ${(props)=>props.marginTop};
    letter-spacing: ${(props)=>props.spacing && '0.1rem'};
`;

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0 1vw;
`;

export const Image = styled.img`
    height: 4vh;
`;