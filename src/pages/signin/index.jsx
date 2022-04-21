import { useState } from "react";
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
// import Swal from "sweetalert2";
import api from "../../services/api";

export function SignIn() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = formData;
    const promise = api.postSignIn(email, password);
    promise.then((response) => {
      setIsLoading(false);
      console.log(response.data);
      navigate("/");
    });

    promise.catch((error) => {
      setIsLoading(false);
      console.log(error.response);
    });
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
            <Redirect to={"/"}>
              <p>Não possuo cadastro</p>
            </Redirect>
            <ConfirmButton
              type="submit"
              disabled={isLoading}
              variant="contained"
            >
              CADASTRAR
            </ConfirmButton>
          </Interface>
        </Form>
      </main>
    </Container>
  );
}
