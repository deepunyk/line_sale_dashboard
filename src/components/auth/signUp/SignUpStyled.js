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

    &:hover{
        box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.2);
        transform: scale(1.01);
    }
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
    margin-bottom: 0.8vh;

`;

export const Head = styled.h1`
    margin: 0;
    margin-bottom: 20px;
    color: ${color.primary};
    font-size: 1.4rem;
`;

export const SubHead = styled.div`
    margin-right: 20px;
    text-align: end;
    font-weight: 600;
    min-width: 130px;
    color: ${color.primary};
    font-size: 0.9rem;
`;

export const NoteText = styled.h5`
    font-weight: 600;
    color: ${color.darkGrey};
    margin: 1vh 0 2vh 150px ;
    font-size: 0.8rem;

`;

export const InfoText = styled.h6`
    position:absolute;
    bottom: 3vh;
    right: 5vw;;
    font-weight: 700;
    color: ${color.primaryDark};
    margin: 2vh 0 2vh 220px;

`;

export const InputField = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${color.primary};
    padding: 2px 6px;
    background-color: transparent;
    font-size: 1rem;
    color: ${color.brown};
    font-weight: 700;
    
    margin-right: ${props => props.marginRight ?? '0'};

    ::placeholder{
        color: ${color.brown};
        font-weight: 600;

    }
    &:focus{
        background-color: white;
        outline: none;
        border-bottom: 2px solid ${color.primary};

    }
    
`;