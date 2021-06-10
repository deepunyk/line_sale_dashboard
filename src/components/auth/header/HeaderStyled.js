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
    height: 115px;
    box-sizing: border-box;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
        @media only screen and (max-width: 600px) {
      display: none;

    }
`;

export const MenuItem = styled.h2`
    font-family: 'Maitree', serif; 

    margin-left: 1.5vw;
    font-size: 1.25rem;
    font-weight: 600;
    &:hover{
        cursor: pointer;
        color: ${color.primary};
    }
    @media only screen and (max-width: 600px) {
        margin: 25px 15px;
    }
`;

export const Text = styled.h4`
    color: ${color.grey};
    margin-right: 15px;
    font-weight: 600;

`;

export const Button = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1.2rem;
    padding: 10px 18px;
    border-radius: 30px;
`;

export const Image = styled.img`
    height: 80px;
    margin-right: 15px;
    margin-bottom: ${(props)=>props.marginBottom && '5px'};

    @media only screen and (max-width: 600px) {
        height: 70px;

    }
`;
export const SubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;

    @media only screen and (max-width: 600px) {
        width: 100%;
        justify-content: ${(props)=>props.drawer && 'center'};
        padding-bottom: ${(props)=>props.drawer && '10px'};

    }
`;