import styled from 'styled-components';
import color from '../../constants/color';

export const AuthButton = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1.1rem;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 30px;
    transition: background-color 0.2s, transform 0.2s;

    &:hover{
        background-color: ${color.primaryDark};
        cursor: pointer;
        transform: scale(1.02);
    }
`;

export const LineHead = styled.h1`
    color: ${color.primary};
    letter-spacing: 0.1rem;
`;