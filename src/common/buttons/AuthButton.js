import styled from 'styled-components';
import color from '../../constants/color';


const AuthButton = styled.button`
    background-color: ${color.primary};
    color: white;
    border: none;
    font-size:1.2rem;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 30px;

    &:hover{
        background-color: ${color.primaryDark};
        cursor: pointer;
        transform: scale(1.02);
    }
`;

export default AuthButton;