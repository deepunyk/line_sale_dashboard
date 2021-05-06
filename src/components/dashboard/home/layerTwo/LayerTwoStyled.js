import styled from 'styled-components';
import color from '../../../../constants/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props)=>props.isCenter ? 'center' :'space-evenly'};
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 4vh 0;
`;


export const ChartWrapper = styled.div`

    width: 100%;
    height: 100%;
    padding: 4vh 2.5vw;

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
    font-weight: ${(props)=>props.lightFont ?'500':'700'};
    font-size: ${(props)=>props.fontSize};
    margin-bottom: ${(props)=>props.marginBottom};
    margin-top: ${(props)=>props.marginTop};
    margin-right: ${(props)=>props.marginRight};
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
    width: 100%;
    height: 100%;
    padding: 0 1vw;

`;

export const CompanySubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 3vw;
    height: 3vw;
    margin: auto;
`;

