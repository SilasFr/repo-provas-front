import styled from "styled-components";
import logoImg from "../assets/logo-img.svg";
import logoName from "../assets/logo.svg";

export function Logo() {
  return (
    <LogoComponent>
      <img src={logoImg} alt="logotipo" />
      <img src={logoName} alt="repo provas" />
    </LogoComponent>
  );
}

const LogoComponent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
