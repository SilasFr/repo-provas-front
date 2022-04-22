import { useContext } from "react";
import { Logo } from "../../components/Logo";
import {
  Container,
  IconsContainer,
  LogoutIcon,
  SearchBar,
  SearchContainer,
} from "../../components/navComponents";
import TabContext from "../../contexts/tabContext";

export function Header() {
  const { tab } = useContext(TabContext);
  return (
    <Container>
      <IconsContainer>
        <Logo />
        <LogoutIcon fontSize="large" />
      </IconsContainer>
      <SearchContainer>
        <SearchBar placeholder={`Pesquise por ${tab.title}`}></SearchBar>
      </SearchContainer>
    </Container>
  );
}
