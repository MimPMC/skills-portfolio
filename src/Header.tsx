import { useState } from "react";
import styled from "styled-components";

interface IconProps {
  $clicked: boolean;
}

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <LogoWrapper>
          <h2>Scrum Sages</h2>
        </LogoWrapper>
        <BurgerWrapper onClick={handleClick}>
          <Burger $clicked={click}></Burger>
        </BurgerWrapper>
      </HeaderWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: red;
  height: 3rem;
  display: flex;
  justify-content: center;
`;
const HeaderWrapper = styled.div`
  max-width: 1440px;
  background: blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  height: 100%;
  margin-left: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BurgerWrapper = styled.div`
  height: 100%;
  margin-right: 0.6rem;
  width: 1.7rem;
  background: green;
  position: relative;
`;

const Burger = styled.span<IconProps>`
  position: absolute;
  border-radius: 1rem;
  top: 1.4rem;
  background-color: ${(props) => (props.$clicked ? "transparent" : "black")};
  width: 1.7rem;
  height: 3px;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    background-color: black;
    border-radius: 1rem;
    width: 1.7rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: -0.6rem;
  }
  &::after {
    top: 0.6rem;
  }
  &::before {
    top: ${(props) => (props.$clicked ? "0" : "-0.6rem")};
    transform: ${(props) => (props.$clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.$clicked ? "0" : "0.6rem")};
    transform: ${(props) => (props.$clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
