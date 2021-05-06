import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    position: relative;
    z-index: 10;
    padding: 2vh 6vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
    height: 15vh;
    box-sizing: border-box;
`;

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;

export const Image = styled.img`
    height: ${(props)=>props.height};
    margin-right: ${(props)=>props.marginBottom ?? '1vw'};
    margin-bottom: ${(props)=>props.marginBottom && '10px'};
`;

export const Divider = styled.div`
    background-color: ${color.lightGrey};
    width: 1.5px;
    height: 80%;
`;

export const Text = styled.h2`
    color: ${(props)=>props.color};
    font-weight: 600;
    font-size: ${(props)=>props.fontSize};
    margin: 1px;
    margin-left: ${(props)=>props.color == color.maroon &&'0.5rem'};

`;

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props)=>props.alignEnd ?'flex-end':'center'};
    margin-left: ${(props)=>props.marginLeft&&'1vw'};

`;