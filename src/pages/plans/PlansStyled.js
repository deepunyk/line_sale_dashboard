import styled from 'styled-components';
import color from '../../constants/color';

export const Wrapper = styled.div`
    height: calc(100vh - 40px);    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:start;
    background: white;
    z-index: -1;
    padding: 4vh 8vw 8vh;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content:start;
    width: 100%;
`;

export const Text = styled.h1`
    color: ${(props)=>props.color};
    font-size: ${(props)=>props.size};
    font-weight: ${(props)=>props.weight};
    margin: 0;
    margin-right:${(props)=>props.marginRight};
`;

export const PlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content:space-between;
    width: 100%;
    margin: 3vh 0 auto 0;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:start;
    border-radius: 10px;
    width: 22vw;
    height: 55vh;
    background: rgb(253,72,146);
    background: linear-gradient(172deg, rgba(253,72,146,1) 0%, rgba(253,4,104,1) 100%); 
    padding: 5vh 2.5vw;
`;

export const PriceText = styled.h1`
    color: white;
    font-size: 7.5vw;
    font-weight: 500;
    width: fit-content;
    margin: 0;
`;

export const Button = styled.button`
    color: black;
    width: 100%;
    font-size:1.4rem;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 30px;
    border: none;
    background-color: ${color.yellow};
    letter-spacing: 0.05rem;
    margin-top: auto;
    margin-bottom: 1vh;

    &:hover{
        background-color: ${color.primaryDark};
        cursor: pointer;
        transform: scale(1.02);
        background-color: ${color.darkYellow};


    }
`;

export const Divider = styled.div`
    height: 1vh;
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