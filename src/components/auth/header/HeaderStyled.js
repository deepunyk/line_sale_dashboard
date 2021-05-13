import styled from 'styled-components';
import color from '../../../constants/color';


export const Wrapper = styled.div`
    position: relative;
    z-index: 10;
    padding: 2vh 4vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
    height: 115px;
    box-sizing: border-box;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MenuItem = styled.h2`
    font-family: 'Maitree', serif; 

    margin-right: 1.5vw;
    font-size: 1.25rem;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        color: ${color.primary};
    }
`;

export const Text = styled.h4`
    color: ${color.grey};
    margin-right: 1vw;
`;

export const Button = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1.2rem;
    padding: 10px 18px;
    border-radius: 30px;
`;