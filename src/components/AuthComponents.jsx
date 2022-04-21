import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";

export function AuthForm() {
  return;
}

const Container = styled.div`
  height: 100%;
  max-width: 464px;
  margin: 65px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 130px;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

const Redirect = styled(Link)`
  color: #4673cacc;
  text-decoration: underline;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

const Inputs = styled(TextField)`
  width: 100%;
  position: relative;
`;

const GithubButton = styled(Button)`
  width: 100%;
`;

const ConfirmButton = styled(Button)`
  max-width: 116px;
`;

const SeePassword = styled(RemoveRedEyeOutlinedIcon)`
  width: 22px;
  position: absolute;
  top: 10px;
  /* bottom: auto; */
  right: 14px;
  z-index: 2;
  color: #000;
  border: 1px solid red;
`;

const Interface = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

export {
  Container,
  Form,
  Inputs,
  GithubButton,
  ConfirmButton,
  SeePassword,
  Redirect,
  Interface,
};
