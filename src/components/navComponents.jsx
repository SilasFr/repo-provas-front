import styled from "styled-components";
import { TextField } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Container = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: column;

  padding: 30px;
  border-bottom: 2px solid #c4c4c4;
`;

const IconsContainer = styled.div`
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 0 0 50px;
`;

const SearchContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 0 0 0;
`;

const SearchBar = styled(TextField)``;

const LogoutIcon = styled(LogoutRoundedIcon)`
  width: 50px;
`;

export { Container, IconsContainer, SearchContainer, SearchBar, LogoutIcon };
