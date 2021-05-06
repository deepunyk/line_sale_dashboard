import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    height:100%;
    box-sizing: border-box;
`;

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: ${(props)=>props.big?'60%':'40%'};
    width: 100%;
`;

export const Divider = styled.div`
    height: 70%;
    width: 2px;
    background-color: ${color.brownShade1}
`;

export const HorizontalDivider = styled.div`
    width: 90%;
    height: 2px;
    background-color: ${color.primary}
`;