import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import {
  Container,
  IconsContainer,
  LogoutIcon,
  SearchBar,
  SearchContainer,
} from "../../components/navComponents";
import TabContext from "../../contexts/tabContext";
import UserContext from "../../contexts/userContext";

export function Header() {
  const { tab } = useContext(TabContext);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    login({});
    navigate("/");
  }
  return (
    <Container>
      <IconsContainer>
        <Logo
          onClick={() => {
            navigate("/home");
          }}
        />
        <LogoutIcon fontSize="large" onClick={handleLogout} />
      </IconsContainer>
      <SearchContainer>
        <SearchBar placeholder={`Pesquise por ${tab.title}`}></SearchBar>
      </SearchContainer>
    </Container>
  );
}
