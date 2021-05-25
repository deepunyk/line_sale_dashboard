import styled from 'styled-components';
import color from '../../../../constants/color';

export const Wrapper = styled.div`
    grid-area: ${props=>props.area};
    display: flex;
    flex-direction: column;
    justify-content: ${(props)=>props.isCenter ? 'center' :'space-evenly'};
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2vh 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
    }
`;


export const ChartWrapper = styled.div`

    width: 100%;
    height: 100%;
    padding: 0 1.5vw 0;
    margin-top: 4vh;
`;

export const SaleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 2.5vw;
    margin-top: 4vh;

    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0);
        background-color: transparent;
    }
    ::-webkit-scrollbar
    {
        width: 0;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb
    {
        background-color: ${color.primary};
    }
`;



export const Text = styled.div`
    color: ${(props)=>props.color ?? 'black'};
    font-weight: ${(props)=>props.lightFont ?'300':'400'};
    font-size: ${(props)=>props.fontSize};
    margin-bottom: ${(props)=>props.marginBottom};
    margin-top: ${(props)=>props.marginTop};
    margin-right: ${(props)=>props.marginRight};
    letter-spacing: ${(props)=>props.spacing&&'0.1rem'};

`;
export const SaleItemWrapper = styled.div`
    display: flex;
    flex-direction: Row;
    align-items: center;
    width: 100%;
    padding-bottom: 5vh;
`;

export const Image = styled.img`
    width: 1.5vw;
    margin-right:  ${(props)=>props.marginRight};
`;

export const CompanyWrapper = styled.div`
    display: flex;
    flex-direction: Row;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 0 1vw;

`;

export const CompanySubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
`;

export const CompanyImageWrapper = styled.div` 
    width: ${(props)=>props.width ?? '1.5vw'};
    height: ${(props)=>props.width ?? '1.5vw'};
    margin-right:  ${(props)=>props.marginRight};
    margin-top:  ${(props)=>props.marginTop};
    margin-bottom:  ${(props)=>props.marginBottom};
    background-color: ${(props)=>props.backgroundColor};
    border-radius: 50%;
    display: flex;
  align-items: center;
  
`;

export const CompanyImage = styled.img` 
    width: 30px;
    height: 30px;
    margin: auto;
`;

