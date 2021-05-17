import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    border-radius: 10px;
    transition: 0.3s cubic-bezier(.2,.8,.1,1) ;
    background-color: white;
    min-width: 350;
    padding: 26px 60px;

`;

export const SubHeadWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isStart ? 'start' : 'space-between'};
    align-items: center;
    width: ${props => props.isCompact ?? '100%'};
    margin-bottom: ${props => props.marginBottom};

    ${props => props.isCompact
        ? `&:hover{
                cursor: pointer;
           }`
        : ''
    }
`;


export const Head = styled.h1`
    color: ${color.greyShade5};
    margin-bottom: 1vh;
    font-size: 1.4rem;

`;

export const Circle = styled.div`
    background-color: ${props => props.primary ? color.primary : color.grey};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-right: 8px;
    transition: background-color 0.5s;

`;

export const SubHead = styled.h2`
    color: ${props => props.primary ? color.primary : color.grey};
    font-size: 1rem;
    transition: background-color 0.5s;
    font-weight: 600;
`;

export const SmallText = styled.h2`
    color: ${color.grey};
    font-size: 0.9rem;
    transition: background-color 0.5s;
    font-weight: 400;
    &:hover{
        cursor: pointer;
        color: ${color.primary};
    }
`;

export const InputField = styled.input`
    width: 320px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${color.grey};
    padding: 0 20px;
    font-size: 0.9rem;
    color: ${color.greyShade5};
    font-weight: 600;
    margin-bottom: ${props => props.bottomMargin ?? '0'};
    transition: background-color 0.5s;

    ::placeholder{
        color: ${color.greyShade5};
    }

    &:focus{
        background-color: white;
        outline: none;
        border: 1px solid ${color.primary};


    }
    
`;

export const Image = styled.img`
    height: 17px;    
    margin-right: 6px;
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