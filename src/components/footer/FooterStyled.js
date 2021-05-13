import styled from 'styled-components';
import color from '../../constants/color';


export const Wrapper = styled.div`

    width: 100%;
    height: 40px;
    background-color: ${color.primary};
    display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
    color: white;
    text-align: center;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
`;