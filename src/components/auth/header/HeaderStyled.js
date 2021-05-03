import styled from 'styled-components';
import color from '../../../constants/color';


export const Wrapper = styled.div`
    padding: 2vh 2vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
`;


export const LineHead = styled.h1`
    color: ${color.primary};
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


`;

export const MenuItem = styled.h2`
    margin-right: 1vw;

    &:hover{
        cursor: pointer;
        color: ${color.primary};
    }
`;

export const Text = styled.h3`
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