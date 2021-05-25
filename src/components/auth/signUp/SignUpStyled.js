import styled from 'styled-components';
import color from '../../../constants/color';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(.2,.8,.1,1) ;
    background-color: white;
    width: 650px;
    padding: 26px 60px;


`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const SubWrapper = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 8px;

`;

export const Head = styled.div`
    margin: 0;
    margin-bottom: 20px;
    color: black;
    font-size: 1.4rem;
    font-weight: 500;
`;

export const SubHead = styled.div`
    margin-right: 20px;
    text-align: end;
    font-weight: 400;
    min-width: 130px;
    color: ${color.primary};
    font-size: 0.9rem;

    span{
        color: red;
    }
`;

export const NoteText = styled.h5`
    font-weight: 400;
    color: ${color.darkGrey};
    margin: 1vh 0 2vh 150px ;
    font-size: 0.8rem;

`;

export const InfoText = styled.h6`
    position:absolute;
    bottom: 105px;
    left: 60px;;
    font-weight: 400;
    color: ${color.primaryDark};

`;

export const SignInText = styled.h6`
    font-weight: 400;
    color: ${color.darkGrey};
    margin: 15px 0 0 0 ;
    font-size: 0.8rem;

    a{
        color: red;
        cursor: pointer;
    }

`;


export const InputField = styled.input`
    width: 100%;
    border: 0;
    border: 1px solid ${color.grey};
    padding: 0 10px;
    font-size: 0.9rem;   
    height: 30px;

    background-color: transparent;
    color: ${color.greyShade5};
    font-weight: 500;
    
    margin-right: ${props => props.marginRight ?? '0'};
    transition: 0.5s;

    ::placeholder{
        color: ${color.greyShade5};
        font-weight: 500;

    }
    &:focus{
        background-color: white;
        outline: none;
        border: 1px solid ${color.primary};

    }
    
`;