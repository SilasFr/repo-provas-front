import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Inputs,
  GithubButton,
  Container,
  ConfirmButton,
  Redirect,
  Interface,
} from "../../components/AuthComponents";
import { Logo } from "../../components/Logo";
import UserContext from "../../contexts/userContext";
import Swal from "sweetalert2";
import api from "../../services/api";

export function SignIn() {
  const { userData, login } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData && userData.token) {
      const promise = api.validateSession(userData.token);
      promise.then((response) => {
        navigate("/home");
      });
      promise.catch((error) => {
        alert(error.response);
        login({});
        navigate("/");
      });
    }
  }, []);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { email, password } = formData;
      const { data: response } = await api.postSignIn(email, password);
      const token = response;
      setIsLoading(false);
      login({
        token,
      });
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: error.response.status,
        text: error.response.statusText,
      });
    }
  }

  return (
    <Container>
      <Logo />
      <main>
        <h2>Login</h2>
        <GithubButton variant="contained" disabled={isLoading}>
          ENTRAR COM O GITHUB
        </GithubButton>
        <p>ou</p>
        <Form onSubmit={handleSubmit}>
          <Inputs
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          ></Inputs>
          <Inputs
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password || ""}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
          <Interface>
            <Redirect to={"/sign-up"}>
              <p>N??o possuo cadastro</p>
            </Redirect>
            <ConfirmButton
              type="submit"
              disabled={isLoading}
              variant="contained"
            >
              ENTRAR
            </ConfirmButton>
          </Interface>
        </Form>
      </main>
    </Container>
  );
}
