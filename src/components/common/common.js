import styled from "styled-components";
import color from "../../constants/color";

export const HeaderButton = styled.button`
  background-color: ${color.primary};
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 6px 16px;
  border-radius: 30px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: ${color.primaryDark};
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const AuthButton = styled.button`
  background-color: ${color.primary};
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  padding: 6px 16px;
  border-radius: 5px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: ${color.primaryDark};

    cursor: pointer;
  }
`;

export const LineHead = styled.div`
  color: ${color.primary};
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
