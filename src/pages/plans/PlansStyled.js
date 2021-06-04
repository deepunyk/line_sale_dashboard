import styled from 'styled-components';
import color from '../../constants/color';

export const Wrapper = styled.div`
    height: calc(100vh - 155px);    
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;
    padding: 4vh 8vw 8vh;
    background-color: whitesmoke;
    overflow-y: auto;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content:start;
    width: 100%;
    margin-bottom: 10px;
`;

export const Text = styled.div`
    color: ${(props)=>props.color};
    font-size: ${(props)=>props.size};
    font-weight: ${(props)=>props.weight};
    margin-right:${(props)=>props.marginRight};
    margin-bottom:${(props)=>props.marginBottom};
    text-decoration: ${(props)=>props.line && 'underline'};
`;

export const PlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content:space-between;
    width: 100%;
    margin-bottom: ${props=>props.marginBottom};
`;

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:space-between;
    width: 300px;
    height: 330px;
    background: white; 
    padding: 30px 2.5vw;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    border-radius: 10px;
`;

export const PriceText = styled.h1`
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
    width: fit-content;
    margin: 0 0 0 0;
`;

export const Button = styled.button`
    color: white;
    width: 100%;
    font-size:0.9rem;
    font-weight: 700;
    padding: 10px 18px;
    border-radius: 10px;
    border: none;
    background-color: ${color.primary};
    letter-spacing: 0.05rem;

    &:hover{
        cursor: pointer;
        transform: scale(1.02);
        background-color: ${color.primaryDark};


    }
`;

export const Divider = styled.div`
    height: 2px;
    width: ${(props)=>props.enquiry?'27vw':'100%'};
    background-color: ${color.yellow};
    margin: 2vh 0;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    width: 100%;

`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`;

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content:center;
`;