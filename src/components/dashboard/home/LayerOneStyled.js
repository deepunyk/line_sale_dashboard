import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props)=>props.isCenter ? 'center' :'space-evenly'};
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Text = styled.div`
    color: ${(props)=>props.color??'black'};
    font-weight: ${(props)=>props.lightFont ?'500':'700'};
    font-size: ${(props)=>props.fontSize ??'1rem'};
    margin-bottom: ${(props)=>props.marginBottom};
    margin-top: ${(props)=>props.marginTop};

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