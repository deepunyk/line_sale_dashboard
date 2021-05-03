import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    padding: 2vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Head = styled.h1`
    color: ${color.primary};
`;

export const SubHead = styled.h2`
    color: ${props => props.primary?color.primary: color.grey};
    font-size: 1.2rem;
`;