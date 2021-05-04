import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 4vw;
`;

export const SubHeadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isStart? 'start': 'space-between'};
    align-items: center;
    width: ${props => props.isCompact?? '100%'};
    margin-bottom: ${props => props.marginBottom}
`;


export const Head = styled.h1`
    color: ${color.primary};
`;

export const Circle = styled.div`
    background-color: ${props => props.primary?color.primary: color.grey};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const SubHead = styled.h2`
    color: ${props => props.primary?color.primary: color.grey};
    font-size: 1.1rem;


`;

export const InputField = styled.input`
    width: 340px;
    height: 80px;
    border-radius: 60px;
    border: 3px solid ${color.primary};
    padding: 0 25px;
    background-color: ${color.lightBrown};
    font-size: 1rem;
    color: ${color.brown};
    font-weight: 600;
    margin-bottom: ${props => props.bottomMargin ?? '0'};

    ::placeholder{
        color: ${color.brown};
    }

    &:focus{
        background-color: white;
        outline: none;
    }
    
`;

export const Image = styled.img`
    height: 22px;    
    margin-right: 10px;
    color: red;
`;

export const Button = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1.2rem;
    padding: 10px 18px;
    border-radius: 30px;
`;